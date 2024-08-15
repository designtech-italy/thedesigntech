<?php

/**
 * Extension Manager/Repository config file for ext "ngs_default_template".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Ngs Default Template',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '11.5.0-11.5.99',
            'fluid_styled_content' => '11.5.0-11.5.99',
            'rte_ckeditor' => '11.5.0-11.5.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'NGS\\NgsDefaultTemplate\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Karen Manukyan',
    'author_email' => 'karen.manukyan@naghashyan.com',
    'author_company' => 'Naghashyan Solutions LLC',
    'version' => '1.0.0',
];
