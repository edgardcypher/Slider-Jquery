/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var speed = 500;//fade speed
    var autoswitch = true;//auto slider option
    var autoswitch_speed = 4000;//auto slider speed

    /*Add initial active class*/
    $('.slide').first().addClass('active');//the attr is now class='slide active'
    /*Hide all slides*/
    $('.slide').hide();
    /*Show the first slice*/
    $('.active').show();
    /*the code below handles  the click on next for the next slide*/
    $('#next').on('click', nextSlide);

    /*the code below handles  the click on the previous button for the previous slide.
     * note that the active slide is the one that is displayed
     */
    $('#prev').on('click', previousSlide);

    /*
     *  this part below handles the auto sliding and we use the setInterval method to do it and that call every 4s the 
     *  mechanism to slide to the next slide 
     */
    if (autoswitch === true) {
        setInterval(nextSlide, autoswitch_speed);
    }
    /*Switch to th next slide*/
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');//the slide with the active attribut(class='slide active') is changed to (class="slide oldActive")
        if ($('.oldActive').is(':last-child'))
        {//check if the slide with oldActive attr is the last slide
            $('.slide').first().addClass('active');// so when we get to the last slide we active the first slide
        } else
        {
            $('.oldActive').next().addClass('active');// put the attribut active on the next slide
        }
        $('.oldActive').removeClass('oldActive')//remove all slide with oldActive as an attribut
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    /*Switch to the previous slide*/
    function previousSlide() {
        $('.active').removeClass('active').addClass('oldActive');//the slide with the active attribut(class='slide active') is changed to (class="slide oldActive")
        if ($('.oldActive').is(':first-child')) {//check if the slide with oldActive attr is the last slide
            $('.slide').last().addClass('active');// so when we get to the last slide we active the first slide
        } else
        {
            $('.oldActive').prev().addClass('active');// put the attribut active on the next slide
        }
        $('.oldActive').removeClass('oldActive')//remove all slide with oldActive as an attribut
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});
