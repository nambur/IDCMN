/* general JavaScript functions */
$(document).ready(function(e) {
	// navBar click handler for tablet and mobile view
    $('#mobileNav').on('click', function() {
		var show = $('.nav_elem').hasClass('hide_tablet');
		
		if (show)
			$('.nav_elem').toggleClass('hide_tablet');
		
		$('#navBar').toggleClass('show');
			
		$('#navBar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
  			if (!show)
				$('.nav_elem').toggleClass('hide_tablet');
		});
	});
	
	// search button handlers
	$('#searchButton').mouseover( function() {
		$(this).attr('src', 'img/search_button_hover.jpg');
	});
	$('#searchButton').mouseout( function() {
		$(this).attr('src', 'img/search_button.jpg');
	});
});