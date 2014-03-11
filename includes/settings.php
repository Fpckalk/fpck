<?php

// Error Reporting, disable if live
error_reporting(E_ALL);

// Disable magic quotes
ini_set('magic_quotes_gpc', 0); 
ini_set('magic_quotes_runtime', 0); 
ini_set('magic_quotes_sybase', 0);

// Misc
$language = 'nl';

// Set exceptions/redirects and new destination
$exceptions = array(
  // leave out '/' before both strings, example: 'contact.html' => 'contact/'
);


// Headers
$title = 'Portfolio';
$desc = 'Portfolio website Frank Kalk (under construction)';
$author = 'Frank Kalk';
$client = 'Frank Kalk';
$copyright = '(c) ' . date('Y') . ' Frank @ burningafro.org';