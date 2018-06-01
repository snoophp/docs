<?php

/*******************************
 * Sami documentor configuration
 ******************************/

use Sami\Sami;
use Symfony\Component\Finder\Finder;

// Create file iterator
$iter = Finder::create()
	->files()
	->name("*.php")
	->in(__DIR__."/../framework/src/SnooPHP")
	->in(__DIR__."/../imgur/src/SnooPHP")
	->in(__DIR__."/../vue/src/SnooPHP")
;

// Return sami instance
$sami = new Sami($iter, [
	"title"		=> "SnooPHP API",
	"build_dir"	=> __DIR__."/docs"
]);
return $sami;
