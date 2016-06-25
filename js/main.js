/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$('.how-it-works').click(function(){
  $('.how-it-works').removeClass('c-selected');
  $('.how-it-works h4').removeClass('selected');
  $(this).addClass('c-selected');
  $('h4',this).addClass('selected');

});
// how it works section
$('#add-proj').click(function(){
  $("#how-it-works-img").hide().fadeIn(1300);
  $('#how-it-works-img').css("background-image", "url(img/add-proj.png)");
});
$('#publish-proj').click(function(){
  $("#how-it-works-img").hide().fadeIn(1300);
  $('#how-it-works-img').css("background-image", "url(img/publish-proj.png)");
});
$('#browse-projs').click(function(){
  $("#how-it-works-img").hide().fadeIn(1300);
  $('#how-it-works-img').css("background-image", "url(img/browse-projs.png)");
});
$('#show-results').click(function(){
  $("#how-it-works-img").hide().fadeIn(1300);
  $('#how-it-works-img').css("background-image", "url(img/show-results.png)");
});
//to apply hover effect to #add-proj div on page load
$(document).ready(function(){
  $('#add-proj h4').addClass('selected');
  $('#add-proj.how-it-works').addClass('c-selected');
});

// apply autoclose and autoplay the video
var iframe = document.getElementById('vimeo-video');
// $f == Froogaloop
var player = $f(iframe);

$('.modal').on('hidden.bs.modal', function () {
  player.api('pause');
})

$('.modal').on('shown.bs.modal', function () {
  player.api('play');
});
