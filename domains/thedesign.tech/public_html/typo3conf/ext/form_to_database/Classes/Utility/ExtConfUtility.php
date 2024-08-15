<?php
/**
 * This file is part of the "form_to_database" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

namespace Lavitto\FormToDatabase\Utility;

use TYPO3\CMS\Core\SingletonInterface;

/**
 * Class FormValueUtility
 *
 * @package Lavitto\FormToDatabase\Utility
 */
class ExtConfUtility implements SingletonInterface
{

    /**
     * @var array
     */
    protected $extConf;

    /**
     * @var array
     */
    protected $defaultExtConf = [
        'hideLocationInList' => false,
        'csvDelimiter' => ';',
        'csvOnlyFilenameOfUploadFields' => false
    ];

    /**
     * Initialize the ExtConfUtility
     */
    public function initializeObject(): void
    {
        $extConfSerialized = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['form_to_database'] ?? null;
        $extConf = [];
        if ($extConfSerialized !== null) {
            $extConf = unserialize($extConfSerialized, ['allowed_classes' => false]);
        }
        $this->extConf = array_merge($this->defaultExtConf, $extConf);
        $this->validateExtConf();
    }

    /**
     * Returns the full configuration
     *
     * @return array
     */
    public function getFullConfig(): array
    {
        return $this->extConf;
    }

    /**
     * Gets a configuration
     *
     * @param string $key
     * @return mixed
     */
    public function getConfig(string $key)
    {
        return $this->extConf[$key];
    }

    /**
     * Validates the configuration
     */
    protected function validateExtConf(): void
    {
        foreach ($this->defaultExtConf as $field => $value) {
            if (is_bool($value) === true) {
                $this->extConf[$field] = (bool)$this->extConf[$field];
            } elseif (is_int($value) === true) {
                $this->extConf[$field] = (int)$this->extConf[$field];
            } elseif (is_float($value) === true) {
                $this->extConf[$field] = (float)$this->extConf[$field];
            } elseif (is_string($value) === true) {
                $this->extConf[$field] = trim((string)$this->extConf[$field]);
            }
        }
    }
}
