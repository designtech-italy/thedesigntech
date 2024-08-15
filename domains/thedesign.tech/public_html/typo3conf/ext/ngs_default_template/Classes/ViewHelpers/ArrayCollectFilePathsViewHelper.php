<?php

namespace NGS\NgsDefaultTemplate\ViewHelpers;

use TYPO3\CMS\Core\Exception;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Resource\ResourceFactory;

class ArrayCollectFilePathsViewHelper extends AbstractViewHelper
{

    protected $escapeOutput = false;

    public function initializeArguments()
    {
        parent::initializeArguments();
        $this->registerArgument('key', 'string', '', true);
        $this->registerArgument('array', 'array', '', true);
    }

    public function render()
    {
        $contentRecords = [];
        $key = $this->arguments['key'];
        $array = $this->arguments['array'];
        foreach ($array as $index => $value) {
            if (isset($value[$key])) {
                $path = $this->getPath($value[$key]);
                if ($path) {
                    $contentRecords[] = $path;
                }
            }
        }
        return json_encode($contentRecords);
    }

    private function getPath(string $fileReferenceString): ?string
    {
        /** @var ResourceFactory $resourceFactory */
        $resourceFactory = GeneralUtility::makeInstance(ResourceFactory::class);

        preg_match('/uid=(\d+)/', $fileReferenceString, $matches);
        $fileUid = (int)$matches[1];

        try {
            $fileObj = $resourceFactory->getFileObject($fileUid);
        } catch (Exception $exception) {
            return null;
        }
        return $fileObj->getPublicUrl();
    }

}