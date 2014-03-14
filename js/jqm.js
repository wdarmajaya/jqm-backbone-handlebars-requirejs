
// $( document ).on( "pageinit", function( ) {
// 	console.log("pageinit");
// 	$( "[data-role='header']" ).toolbar();
// });

$(function(){
	console.log("refresh toolbar");
	$( "[data-role='header'], [data-role='footer']" ).toolbar();
	$( "[data-role='panel']" ).panel();
	$( ".my-navmenu-panel ul" ).listview();
});

$( document ).on( "pagecreate", ".my-app", function( event ) {
	console.log("pagecreate");
	// Global navmenu panel 
	
});