<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "ig_language_detection".
 *
 * Auto generated 18-07-2023 12:00
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Language Detection Redirect Resolver',
  'description' => 'Language detection in PSR-15 middleware stack on uri=/. Based on the Accept-Language Header the corresponding site config is choosen. Additional configuration in YAML site configuration is available like aliases and more',
  'category' => 'fe',
  'version' => '1.0.8',
  'state' => 'stable',
  'uploadfolder' => false,
  'clearcacheonload' => false,
  'author' => 'Daniel Abplanalp',
  'author_email' => 'typo3@internetgalerie.ch',
  'author_company' => 'Internetgalerie AG',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '9.5.0-11.5.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
);

