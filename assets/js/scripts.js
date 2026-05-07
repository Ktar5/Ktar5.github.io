// Remove whitespace-only paragraphs Jekyll generates around includes
document.querySelectorAll('p').forEach(function(p) {
    if (p.innerHTML.trim() === '') p.style.display = 'none';
});

// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links (exclude collage images)
$("a[href$='.jpg']:not(.collage-img),a[href$='.jpeg']:not(.collage-img),a[href$='.JPG']:not(.collage-img),a[href$='.png']:not(.collage-img),a[href$='.gif']:not(.collage-img)").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
$(document).ready(function() {
    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	// Collage galleries — each .collage is its own independent gallery
	$('.collage').each(function() {
		$(this).find('a.collage-img').magnificPopup({
			type: 'image',
			gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
			image: { titleSrc: 'title' },
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	});
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});
