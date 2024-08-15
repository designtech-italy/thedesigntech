<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "form_to_database".
 *
 * Auto generated 10-03-2023 18:46
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Form to Database',
  'description' => 'Extends the TYPO3 form with a very simple database finisher, to save the form-results in the database.',
  'category' => 'frontend',
  'version' => '2.1.2',
  'state' => 'beta',
  'uploadfolder' => false,
  'clearcacheonload' => false,
  'author' => 'Philipp Mueller',
  'author_email' => 'philipp.mueller@lavitto.ch',
  'author_company' => 'lavitto ag',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '10.4.0-11.5.99',
      'form' => '10.4.0-11.5.99',
      'php' => '7.4.0-8.1.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
);

