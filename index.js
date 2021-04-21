/*charmi*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.onload = function(){ 
AOS.init({
  duration: 1200,
})
};
var i = 0;
var txt = ' A land resounding with the riches and glories of opulent dynasties, powerful rulers, flourishing civilisations and profound history. India has a splendid heritage that is reflected in its architecture, monuments, arts, crafts, cultures and even religions. While formidable forts, ancient temples and grand palaces testify of the grandeur of times gone by, the various museums and galleries scattered across the country act as inventories of Indias seamless past. Such is the magnificence of the structures in the country that UNESCO has identified several of them as heritage sites.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 