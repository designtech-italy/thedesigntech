<?php

declare(strict_types=1);

namespace NGS\NgsDefaultTemplate\Configuration;

use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

/**
 * Extension
 */
final class Extension
{
    public const KEY = 'ngs_default_template';

    public static function addTypoScriptSetup(): void
    {
        ExtensionManagementUtility::addTypoScriptSetup(trim('
            module.tx_form {
                settings {
                    yamlConfigurations {
                        20120401 = EXT:ngs_default_template/Configuration/Yaml/CustomFormSetup.yaml
                    }
                }
            }
        '));

        // load additional YAML configuration to load translation files differently for T3 v10
//        $typo3Version = new Typo3Version();
//        if ($typo3Version->getMajorVersion() >= 10) {
//            ExtensionManagementUtility::addTypoScriptSetup(trim('
//                module.tx_form {
//                    settings {
//                        yamlConfigurations {
//                            1587917063 = EXT:form_element_linked_checkbox/Configuration/Yaml/FormSetupV10.yaml
//                        }
//                    }
//                }
//            '));
//        }
    }

//    public static function registerHooks(): void
//    {
//        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/form']['afterFormStateInitialized'][1571076908] = FormElementLinkResolverHook::class;
//    }
}
