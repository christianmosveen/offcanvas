var showSidebar = function() {
	$('body').removeClass("active-nav").toggleClass("active-sidebar");
	$('.menu-button').removeClass("active-button");
	$('.sidebar-button').toggleClass("active-button");
}

var showMenu = function() {
	$('body').removeClass("active-sidebar").toggleClass("active-nav");
	$('.sidebar-button').removeClass("active-button");
	$('.menu-button').toggleClass("active-button");
}

jQuery(document).ready(function($) {
	$('.menu-button').click(function(e) {
		e.preventDefault();
		showMenu();
	});
	$('.sidebar-button').click(function(e) {
		e.preventDefault();
		showSidebar();
	});
});