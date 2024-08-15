<?php
defined('TYPO3') or die('Access denied.');
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['ngs_default_template'] = 'EXT:ngs_default_template/Configuration/RTE/Default.yaml';

$GLOBALS['TYPO3_CONF_VARS']['SYS']['fluid']['namespaces']['ngs'][] = 'NGS\\NgsDefaultTemplate\\ViewHelpers';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:ngs_default_template/Configuration/TsConfig/Page/All.tsconfig">');

\NGS\NgsDefaultTemplate\Configuration\Extension::addTypoScriptSetup();