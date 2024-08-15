<?php

declare(strict_types=1);

use NGS\NgsApproveRequest\Controller\BookingController;
use TYPO3\CMS\Extbase\Utility\ExtensionUtility;

defined('TYPO3') or die();

// RSS feed
ExtensionUtility::configurePlugin(
    'NgsApproveRequest',
    'Request',
    [BookingController::class => 'booking, event'],
    // non-cacheable actions
    [BookingController::class => 'booking, event']
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    'ngs_approve_request',
    'FILE:EXT:ngs_approve_request/Configuration/FlexForms/ngs_approve_request.xml'
);




