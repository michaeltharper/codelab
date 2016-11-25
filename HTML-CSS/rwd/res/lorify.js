//  LORIFY script 
//	Function to generate 'lorem ipsum' style filler text, w variable length based on inline parameters.
//	Requires jQuery library.
//  Usage:  assign class 'lorify' then place two comma-separated integers as content - number of sentences, 
//  and number of words per sentence, eg, in <p class="lorify">2,10</p>, the tag contents "2,10" will be 
//  replaced by two sentences of ten words each.

$(function (){
$(".lorify").each(function (){  //	for each tag of class = lorify
	var arglist = $(this).text();  // put the tag text in variable arglist
	// strip characters other than integer and comma, verify 'int,int' format.
	// console.log("arglist:  " + arglist );

	//split on comma
	var args = arglist.split(',');
	var parasize = args[0];
	var sentsize = args[1];

    // declare vars
    var wordlenarray, letarray, letmo, p, thissent, w, randlen, thiswordlen, randword, c, randlet, para;

    //populate wordlenarray to simulate bell curve in word length weighting
    wordlenarray = [2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 7, 8];

    //populate letarray with range of alphabet characters and extras
    letarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    letmo = ['a', 'e', 'eo', 'i', 'o', 'u'];
    letarray = letarray.concat(letmo);

    //initialize work var
    para = "";

    // for each sentence...
    for (p = 1; p <= parasize; p = p + 1) { // create sentences, number provided by user

        thissent = ""; // clear previous sentence
        for (s = 1; s <= sentsize; s = s + 1) { // create words, number provided by user

            // build word of random length and characters
            makeaword();

            // if first two random chars are the same, delete first char for appearance
            checkfordupe();

            // append word to sentence 
            thissent = thissent + " " + randword;

        } // end sentence loop

        // format each sentence
        thissent = thissent.trim(); // trim whitespace
        thissent = thissent.charAt(0).toUpperCase() + thissent.substr(1); // cap first letter
        para = para + thissent + ". "; // add period and trailing space, append to paragraph
        // console.log(para);
    }

    // embed generated content in original tag
	$(this).html(para);
	
    //  UTILS

    // build word of random length and characters
    function makeaword() {
        //get random number, to be number of letters in this word 
        randlen = Math.floor(Math.random() * wordlenarray.length);
        thiswordlen = wordlenarray[randlen];

        //clear variable and build new word 
        randword = "";  // clear previous word
        for (c = 1; c <= thiswordlen; c = c + 1) { // for each letter c
            // get a random character from letarray and append to word
            randlet = letarray[Math.floor(Math.random() * letarray.length)];
            randword += randlet;
        }
    }

    // if first two chars are the same, delete first char
    function checkfordupe() {
        if (randword[0] === randword[1]) {
            randword = randword.substr(1);
        }
    }

	}); // end EACH inner anon function
});