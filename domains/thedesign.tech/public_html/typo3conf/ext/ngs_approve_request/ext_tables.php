<?php
defined('TYPO3_MODE') || die('Access denied.');



call_user_func(
	function()
	{

		\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
			'NgsApproveRequest',
			'Request',
			'Approve Request'
		);


		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('ngs_approve_request', 'Configuration/TypoScript', 'NgsApprove');

		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_ngsapproverequest_domain_model', 'EXT:ngs_approve_request/Resources/Private/Language/locallang_csh_tx_ngsapproverequest_domain_model.xlf');
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_ngsapproverequest_domain_model');

        $pluginSignature = 'ngsapproverequest_request';

        $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
            $pluginSignature,
            // Flexform configuration schema file
            'FILE:EXT:ngs_approve_request/Configuration/FlexForm/ngs_approve_request.xml'
        );



	}
);
