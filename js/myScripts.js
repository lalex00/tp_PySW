$(document).ready(function(){
    // Dropdown hover functionality
    $('.dropdown').hover(function(){
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function(){
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });

    // Hero section text animations
    $('.hero-title').each(function(index) {
        $(this).delay(index * 200).animate({opacity: 1}, 800);
    });

    $('.hero-subtitle').each(function(index) {
        $(this).delay(index * 200 + 300).animate({opacity: 1}, 800);
    });

    $('.hero-btn').each(function(index) {
        $(this).delay(index * 200 + 600).animate({opacity: 1}, 800);
    });

    // Hero button hover effect
    $('.hero-btn').hover(function(){
        $(this).stop(true, false).animate({
            transform: 'scale(1.05)'
        }, 300);
    }, function(){
        $(this).stop(true, false).animate({
            transform: 'scale(1)'
        }, 300);
    });
});