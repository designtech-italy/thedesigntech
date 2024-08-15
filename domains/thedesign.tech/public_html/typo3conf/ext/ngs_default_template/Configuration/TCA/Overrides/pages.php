<?php
defined('TYPO3') or die('Access denied.');
call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'ngs_default_template';

    /**
     * Default PageTS for NgsDefaultTemplate
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'Ngs Default Template'
    );

    $fields = array(
        'identifier' => array(
            'label' => 'LLL:EXT:core/Resources/Private/Language/locallang_tca.xlf:sys_file.identifier',
            'exclude' => 0,
            'config' => array(
                'type' => 'input',
                'size' => '20',
                'eval' => 'trim'
            )
        ),
        'page_nav_mask_id' => array(
            'label' => 'Page nav mask id',
            'exclude' => 0,
            'config' => array(
                'type' => 'input',
                'size' => '20',
                'eval' => 'trim'
            )
        ),
        'target_content' => array (
            'exclude' => 0,
            'label' => 'Target Content',
            'config' => array (
                'type' => 'group',
                'internal_type' => 'db',
                'allowed' => 'tt_content',
                'maxitems' => 1,
                'minitems' => 0,
                'size' => 1
            )
        ),
    );

    // Add new fields to pages:
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $fields);

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
        'pages',
        'title',
        'identifier, page_nav_mask_id, --linebreak--, target_content',
        'after:subtitle'
    );

});
