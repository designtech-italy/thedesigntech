<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "mask".
 *
 * Auto generated 10-03-2023 18:44
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Mask',
  'description' => 'Create your own content elements and page templates. Easy to use, even without programming skills because of the comfortable drag and drop system. Stored in structured database tables. Style your frontend with Fluid tags. Ideal, if you want to switch from Templavoila.',
  'category' => 'plugin',
  'version' => '8.0.7',
  'state' => 'stable',
  'uploadfolder' => false,
  'clearcacheonload' => true,
  'author' => 'WEBprofil - Gernot Ploiner e.U.',
  'author_email' => 'office@webprofil.at',
  'author_company' => 'WEBprofil - Gernot Ploiner e.U.',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '11.5.0-12.4.99',
      'fluid' => '11.5.0-12.4.99',
      'fluid_styled_content' => '11.5.0-12.4.99',
      'fontawesome_provider' => '1.0.0',
    ),
    'suggests' => 
    array (
      'gridelements' => '',
      'container' => '',
    ),
    'conflicts' => 
    array (
    ),
  ),
);

