$(document).ready(function(){$('.about_section').waypoint(function(direction){if(direction=="down"){$('nav').addClass('sticky');}else{$('nav').removeClass('sticky');}},{offset:'600px'})
$('.about_section').waypoint(function(direction){if(direction=="down"){$('.scroll').addClass('scroll-top');}else{$('.scroll').removeClass('scroll-top');}},{offset:'600px'})
$('a').click(function(event){$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top},700);event.preventDefault();});})