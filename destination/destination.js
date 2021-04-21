//mitali-parallax-effect code start
"use strict";
$(document).ready(function () {
    var image = document.getElementsByClassName('thumbnail');
    var secondImage = document.getElementsByClassName('secondThumbnai');
    var thirdImage = document.getElementsByClassName('thirdThumbnai');
    new simpleParallax(image, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });
    new simpleParallax(secondImage, {
        orientation: 'right'
    });
    new simpleParallax(thirdImage, {
        scale: 1.5
    });
});
//mitali-parallax-effect code end

//mitali-popup image code start
$(function () {
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });  
});
//mitali-popup image code end
//Fading popular destination-start
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
  });
//Fading popular destination-end
//mitali-code for video start
var video;
function deferVideo() {
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    video = this.parentElement;
    video.load();
  });
}
window.onload = deferVideo;
//mitali-code for video start

