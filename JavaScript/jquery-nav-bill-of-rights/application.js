//	alert("application.js loaded");

$(function (){
//	composition outline, hide for production
//		$("div.article").css('border','1px dashed #66C');
//	Add 'back to top' after each article
	var btt = $('<a href="#top" style="float:right">[ BACK TO TOP ]</a>');
	btt.addClass('localnav');
	$("div.article p").before(btt);

//	CREATE TOC
//	Create a ToC heading and unordered list near the top of the page
//	Find all the h2s, they are the names of the articles
//	Insert the article names as list items into the UL
//	Insert named anchors into each of the h2s
//	Link the Table of Contents item to the h2S
//  Add ToC at top, ID to accept appending

$("h1").after('<h2 id="toc">Table of Contents</h2>');
$("h2").first().after('<ul id="toc"></ul>');
//	highlight article heads
$("div.article h2").css('backgroundColor','#CCF');
	
//	EACH LOOP thru H2 tags
$("div.article h2").each(function (){  // iterate
	var title = $(this).text();  // get the text of this h2, call it title
	var slug = title.trim().toLowerCase().replace(" ", "-");  // make slug from title, eg. "article-i"
	$(this).before('<a name="' + slug + '" />' );  // wrap slug in anchor, insert before this h2
	
	// for each iteration, append a LI to the ToC UL, w title linked to the anchor slug.
	$("ul#toc").append('<li><a href=#' + slug + '>' + title + '</a></li>');  

//	HIDE/SHOW CONTENT
//	Create the hide link
	var toggle_link = $('<a href="#">[ HIDE ]</a>');
	$(this).after(toggle_link);
	toggle_link.addClass('localnav');
	
//	Attach a click event handler, that
	$(toggle_link).click(function(event){
		event.preventDefault();
		$(this).siblings('p').toggle();	//  toggles the article content visibility, then
		var fliptxt = ( $(this).text() === '[ HIDE ]') ? '[ SHOW ]' : '[ HIDE ]'; //flips link text using ternary operator
		$(this).text(fliptxt); 
	});									
	
/*  Tutorial's syntax for the click event

		toggle_link.on('click', function (event){
			$(this).siblings().hide();
		});
		$(this).after(toggle_link);
*/
		
	}); // end EACH inner anon function
});