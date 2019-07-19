function navHover(x) {
    x.style.opacity = "0";
    x.style.transition = "all 0.6s";
}
function navRelease(x){
 x.style.opacity = "100";
x.style.transition = "all 0.6s";
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
$('#carouselcummins').carousel();
$('#carousel1flatfit').carousel();
$('#carousel2flatfit').carousel();
$('#carousel3flatfit').carousel();

function myHome (){
var x = document.getElementById("button-home");
x.style.display = 'none';
}
