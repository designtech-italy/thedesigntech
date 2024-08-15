<?php

defined('TYPO3') or die();

(static function (): void {
    \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
    // extension name, matching the PHP namespaces (but without the vendor)
        'NgsApproveRequest',
        // arbitrary, but unique plugin name (not visible in the backend)
        'Request',
        // plugin title, as visible in the drop-down in the backend, use "LLL:" for localization
        'Approve Request'
    );
})();