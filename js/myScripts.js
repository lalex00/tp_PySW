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

    /* counter */
    $('.Count').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
        $this.text(Math.ceil(this.Counter));
        }
    });
    });

    /*gallery filter*/
    $('input[type="radio"][name="btnFilter"]').change(function() {
        var filterValue = $(this).attr('id');
        $('.col-12 > .card').parent().show();
        $('.col-12 > .card').not("." + filterValue).parent().hide();
    });
});
