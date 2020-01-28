function navHover(id, id) {
    document.getElementById('homebutton').style.display = 'none';
    document.getElementById('homebuttonhover').style.display = 'inline-block'; 
    document.querySelectorAll("#homebutton, #homebuttonhover").style.transition = "all 2s";
}
function navRelease(id, id) {
    document.getElementById('homebuttonhover').style.display = 'none';
    document.getElementById('homebutton').style.display = 'inline-block';   
}
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "assets/header/logo-copy.png",
    "assets/header/header.png",
    "assets/carahsoft/carahsoft-homepagecover.jpg",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6518908362929815552",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6518908362929815552",
    "assets/carahsoft/carahsoft_background_061019.jpg",
	"http://www.govexec.com/insights/what-is-cbrs/"
)
$('#carousel1flatfit').carousel();
$('#carousel2flatfit').carousel();
$('#carousel3flatfit').carousel();
$('#findARoommateWho').carousel();
$('#carouselcummins').carousel();

window.onscroll = function() {myHome()};

function myHome() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
document.getElementById("logoHome").className = "afterhome";
  }
else {
document.getElementById("logoHome").className = "beforehome";
  }}
$('#photoModal1').modal(options);