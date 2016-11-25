<!-- LORIFY script 
//	Generates nonsense filler text, w variable length based on inline parameters.
//  Usage:  include external script reference in PHP file head, eg: <php include 'lorify.php';>
//	Call inline where required, passing two comma-separated integers to control number of sentences 
//  and number of words per sentence, eg <php lorify(2,10); ?> will be replaced by two sentences of ten words each. -->
<?php
function lorify($paranum, $parasize){
//populate $wordlen to simulate bell curve in word length weighting
$wordlen = array(2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,6,7,8);
$wlarraysize = sizeof($wordlen);

//populate $letarray with range of alphabet characters and extras
$letarray = array_merge(range('a', 'z'), array("a","e","eo","i","o","u"));
$letarraysize = sizeof($letarray);

// clean user input
preg_replace('/[^a-zA-Z0-9\s]/', '', $paranum);  // 3 Nov 2015

// for number of paras in paranum
for ( $p = 1; $p <= $paranum; $p++){  				// for each para p
	// build para, with number of words set by $parasize
	$thispara = "";
	for ( $w = 1; $w <= $parasize; $w++){  			// for each word w
		// get word length at random from $wordlen array
		$randlen = rand(0,$wlarraysize-1);
		$thiswordlen = $wordlen[$randlen];
		// build word of random length and characters
		$randword = "";
		for ( $c = 1; $c <= $thiswordlen; $c++){  	// for each letter c
			// get a random character from $letarray and append to word
			$index = rand(0,$letarraysize-1);
			$randlet = $letarray[$index];
			$randword = $randword . $randlet;
		}

		// append word to paragraph	
		$thispara = $thispara . " " . $randword;
	}

	// format each para
	$thispara = trim($thispara);  			// remove whitespace
	$thispara = ucfirst($thispara); 		// capitalize first letter
	// $thispara = strtoupper($thispara);	// uppercase everything

	if ($paranum === 1) { echo strtoupper($thispara); }  // if just one sentence, uppercase it as TITLE
	else { echo "\n". $thispara . ".\n"; }  // otherwise, write out sentence w closing period & whitespace. 

} // end outer for loop
} // end function	
