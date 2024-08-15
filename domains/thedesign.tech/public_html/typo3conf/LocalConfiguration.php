<?php
return [
    'BE' => [
        'debug' => false,
        'explicitADmode' => 'explicitAllow',
        'installToolPassword' => '$argon2i$v=19$m=65536,t=16,p=1$QmpLRkxwZkx3bk1JVXl6Sg$8qkCVMBzl6Or2dLvfXuLdrqS07kRA7gLAsleQoovNFU',
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'charset' => 'utf8mb4',
                'dbname' => 'u398079358_typo',
                'driver' => 'mysqli',
                'host' => '127.0.0.1',
                'password' => 'Barev456$',
                'port' => 3306,
                'tableoptions' => [
                    'charset' => 'utf8mb4',
                    'collate' => 'utf8mb4_unicode_ci',
                ],
                'user' => 'u398079358_typo3',
            ],
        ],
    ],
    'EXTENSIONS' => [
        'backend' => [
            'backendFavicon' => '',
            'backendLogo' => '',
            'loginBackgroundImage' => '',
            'loginFootnote' => '',
            'loginHighlightColor' => '',
            'loginLogo' => '',
            'loginLogoAlt' => '',
        ],
        'extensionmanager' => [
            'automaticInstallation' => '1',
            'offlineMode' => '0',
        ],
        'form_to_database' => [
            'csvDelimiter' => ';',
            'csvOnlyFilenameOfUploadFields' => '0',
            'hideLocationInList' => '0',
        ],
        'imageoptimizer' => [
            'gifBinary' => 'gifsicle',
            'gifCheck' => 'gif',
            'gifOnProcessing' => '0',
            'gifOnUpload' => '0',
            'gifParametersOnProcessing' => '--batch -O2 %s',
            'gifParametersOnUpload' => '--batch -O2 %s',
            'jpgBinary' => 'jpegoptim',
            'jpgCheck' => 'jpg',
            'jpgOnProcessing' => '0',
            'jpgOnUpload' => '0',
            'jpgParametersOnProcessing' => '--strip-all %s',
            'jpgParametersOnUpload' => '--strip-all %s',
            'pngBinary' => 'optipng',
            'pngCheck' => 'png',
            'pngOnProcessing' => '0',
            'pngOnUpload' => '0',
            'pngParametersOnProcessing' => '-o2 %s',
            'pngParametersOnUpload' => '-o2 %s',
            'svgBinary' => 'svgo',
            'svgCheck' => 'svg',
            'svgOnUpload' => '0',
            'svgParametersOnUpload' => '--pretty %s',
        ],
        'mask' => [
            'backend' => 'EXT:ngs_default_template/Resources/Private/Mask/Backend/Templates',
            'backend_layouts_folder' => 'EXT:ngs_default_template/Resources/Private/Mask/BackendLayouts',
            'backendlayout_pids' => '0',
            'content' => 'EXT:ngs_default_template/Resources/Private/Mask/Frontend/Templates',
            'content_elements_folder' => 'EXT:ngs_default_template/Resources/Private/Mask/ContentElements',
            'json' => 'EXT:ngs_default_template/Resources/Private/Mask/mask.json',
            'layouts' => 'EXT:ngs_default_template/Resources/Private/Mask/Frontend/Layouts',
            'layouts_backend' => 'EXT:ngs_default_template/Resources/Private/Mask/Backend/Layouts',
            'loader_identifier' => 'json-split',
            'partials' => 'EXT:ngs_default_template/Resources/Private/Partials/Page',
            'partials_backend' => 'EXT:ngs_default_template/Resources/Private/Mask/Backend/Partials',
            'preview' => 'EXT:ngs_default_template/Resources/Public/Mask/',
        ],
        'translate_locallang' => [
            'allowedExts' => '*',
            'allowedFiles' => '',
            'clearCache' => '0',
            'defaultLangKey' => 'en',
            'extFilter' => '*',
            'langKeys' => 'de,fr,it',
            'modifyDefaultLang' => '0',
            'modifyKeys' => '0',
            'translatorInfo' => '',
            'useL10n' => '0',
        ],
        'vhs' => [
            'disableAssetHandling' => '0',
        ],
    ],
    'FE' => [
        'cacheHash' => [
            'enforceValidation' => false,
        ],
        'debug' => false,
        'disableNoCacheParameter' => true,
        'pageNotFoundOnCHashError' => false,
        'passwordHashing' => [
            'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
            'options' => [],
        ],
    ],
    'GFX' => [
        'processor' => 'GraphicsMagick',
        'processor_allowTemporaryMasksAsPng' => false,
        'processor_colorspace' => 'RGB',
        'processor_effects' => false,
        'processor_enabled' => true,
        'processor_path' => '/usr/bin/',
        'processor_path_lzw' => '/usr/bin/',
    ],
    'LOG' => [
        'TYPO3' => [
            'CMS' => [
                'deprecations' => [
                    'writerConfiguration' => [
                        'notice' => [
                            'TYPO3\CMS\Core\Log\Writer\FileWriter' => [
                                'disabled' => true,
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
    'MAIL' => [
        'defaultMailFromAddress' => 'info@thedesign.tech',
        'defaultMailFromName' => 'Designtech',
        'defaultMailReplyToAddress' => 'info@thedesign.tech',
        'defaultMailReplyToName' => 'Designtech',
        'transport' => 'smtp',
        'transport_sendmail_command' => '/usr/sbin/sendmail -t -i',
        'transport_smtp_encrypt' => true,
        'transport_smtp_password' => '!69byYu11jCB',
        'transport_smtp_server' => 'smtp.hostinger.com:465',
        'transport_smtp_username' => 'info@thedesign.tech',
    ],
    'SYS' => [
        'caching' => [
            'cacheConfigurations' => [
                'hash' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                ],
                'imagesizes' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'pages' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'pagesection' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
                'rootline' => [
                    'backend' => 'TYPO3\\CMS\\Core\\Cache\\Backend\\Typo3DatabaseBackend',
                    'options' => [
                        'compression' => true,
                    ],
                ],
            ],
        ],
        'devIPmask' => '',
        'displayErrors' => 0,
        'encryptionKey' => 'b648cdaaa32c90e7de8ef35a1bcee523e9c7457a49377638408fd31d815c0277e515c1db0813d332066f974238fea83d',
        'exceptionalErrors' => 4096,
        'features' => [
            'yamlImportsFollowDeclarationOrder' => true,
        ],
        'sitename' => 'Designtech',
        'systemMaintainers' => [
            1,
        ],
    ],
];
