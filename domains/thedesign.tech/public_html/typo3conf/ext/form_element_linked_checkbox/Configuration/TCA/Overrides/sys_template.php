<?php

defined('TYPO3_MODE') or die();

call_user_func(function () {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        'form_element_linked_checkbox',
        'Configuration/TypoScript',
        'Linked checkbox configuration'
    );
});
