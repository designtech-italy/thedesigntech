<?php
/**
 * This file is part of the "form_to_database" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Lavitto\FormToDatabase\Domain\Finishers;

use Lavitto\FormToDatabase\Domain\Model\FormResult;
use Lavitto\FormToDatabase\Domain\Repository\FormResultRepository;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface;
use TYPO3\CMS\Extbase\Domain\Model\FileReference;
use TYPO3\CMS\Extbase\Persistence\Exception\IllegalObjectTypeException;
use TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager;
use TYPO3\CMS\Form\Domain\Finishers\AbstractFinisher;
use TYPO3\CMS\Form\Domain\Model\FormDefinition;
use TYPO3\CMS\Form\Domain\Model\FormElements\FormElementInterface;

/**
 * Class FormToDatabaseFinisher
 *
 * @package Lavitto\FormToDatabase\Domain\Finishers
 */
class FormToDatabaseFinisher extends AbstractFinisher
{

    /**
     * Dont save this fields in database (also used in FromResultsController)
     */
    public const EXCLUDE_FIELDS = ['Honeypot', 'StaticText', 'ContentElement', 'GridRow', 'SummaryPage'];

    /**
     * The FormResultRepository
     *
     * @var FormResultRepository
     */
    protected $formResultRepository;

    /**
     * The ConfigurationManagerInterface
     *
     * @var ConfigurationManagerInterface
     */
    protected $configurationManager;

    /**
     * Injects the FormResultRepository
     *
     * @param FormResultRepository $formResultRepository
     */
    public function injectFormResultRepository(FormResultRepository $formResultRepository): void
    {
        $this->formResultRepository = $formResultRepository;
    }

    /**
     * Injects the ConfigurationManagerInterface
     *
     * @param ConfigurationManagerInterface $configurationManager
     */
    public function injectConfigurationManager(ConfigurationManagerInterface $configurationManager): void
    {
        $this->configurationManager = $configurationManager;
    }

    /**
     * Writes the form-result into the database, excludes Honeypot
     *
     * @throws IllegalObjectTypeException
     */
    protected function executeInternal(): void
    {
        $formDefinition = $this->finisherContext->getFormRuntime()->getFormDefinition();
        if ($formDefinition instanceof FormDefinition) {
            /** @noinspection PhpInternalEntityUsedInspection */
            $formPersistenceIdentifier = $formDefinition->getPersistenceIdentifier();

            $formValues = [];
            foreach ($this->finisherContext->getFormValues() as $fieldName => $fieldValue) {
                $fieldElement = $formDefinition->getElementByIdentifier($fieldName);
                if ($fieldElement instanceof FormElementInterface && in_array($fieldElement->getType(),
                        self::EXCLUDE_FIELDS, true) === false) {
                    if ($fieldValue instanceof FileReference) {
                        $formValues[$fieldName] = $fieldValue->getOriginalResource()->getCombinedIdentifier();
                    } else {
                        $formValues[$fieldName] = $fieldValue;
                    }
                }
            }

            $delimiter = strrpos($formDefinition->getIdentifier(), '-');
            $formPluginUid = substr($formDefinition->getIdentifier(), $delimiter + 1);
            $formIdentifier = substr($formDefinition->getIdentifier(), 0, $delimiter);
            $formResult = new FormResult();
            $formResult->setFormPersistenceIdentifier($formPersistenceIdentifier);
            $formResult->setSiteIdentifier($GLOBALS['TYPO3_REQUEST']->getAttribute('site')->getIdentifier());
            $formResult->setPid($GLOBALS['TSFE']->id);
            $formResult->setResultFromArray($formValues);
            $formResult->setFormPluginUid($formPluginUid);
            $formResult->setFormIdentifier($formIdentifier);

            $this->formResultRepository->add($formResult);
            $persistenceManager = GeneralUtility::makeInstance(PersistenceManager::class);
            $persistenceManager->persistAll();

            $this->finisherContext->getFinisherVariableProvider()->add(
                $this->shortFinisherIdentifier,
                'formToDatabase.formResult',
                $formResult
            );
        }
    }
}
