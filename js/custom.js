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
    "assets/carahsoft/carahsoft-homepagecover.jpg",
    "assets/carahsoft/carahsoft_eventoverviewbrandingoption1_061019.png",
    "assets/carahsoft/carahsoft_individualeventbrandingoption1_061019.jpg",
    "assets/carahsoft/carahsoft_eventoverviewbrandingoption2_061019.png",
    "assets/carahsoft/carahsoft_individualeventbrandingoption2_061019.png",
    "assets/carahsoft/carahsoft_desktophomepage_061019.png",
    "assets/carahsoft/carahsoft_mobileindividualpage_061019.png",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6518908362929815552",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:6518908362929815552",
    "assets/carahsoft/carahsoft_background_061019.jpg",
    "assets/cummins/cumminslogo.png",
    "assets/cummins/cummins-new2.jpg",
    "assets/cummins/cummins-old.jpg",
    "assets/cummins/cummins-flow-advantage.jpg",
    "assets/cummins/cummins-flow-engine-calculator.jpg",
    "assets/cummins/cummins-flow-engine-rating-charts.jpg",
    "assets/cummins/cummins-flow-engines.jpg",
    "assets/cummins/cummins-flow-engine-detail.jpg",
    "assets/cummins/cummins-flow-get-a-quote.jpg",
    "assets/cummins/cummins-flow-maintainence.jpg",
    "assets/cummins/cummins-flow-faqs.jpg",
    "assets/cummins/flow-combined.png",
    "assets/cummins/oldspecsheet-1.png",
    "assets/cummins/oldspecsheet-2.png",
    "assets/cummins/oldspecsheet-3.png",
    "assets/cummins/oldspecsheet-4.png",
    "assets/cummins/oldspecsheet-5.png",
    "assets/cummins/oldspecsheet-6.png",
    "assets/cummins/oldspecsheet-7.png",
    "assets/cummins/newspecsheet-1.png",
    "assets/cummins/newspecsheet-2.png",
    "assets/cummins/newspecsheet-3.png",
    "assets/cummins/newspecsheet-4.png",
    "assets/cummins/newspecsheet-5.png",
    "assets/cummins/newspecsheet-6.png"
)
$('#carouselcummins').carousel();
$('#carousel1flatfit').carousel();
$('#carousel2flatfit').carousel();
$('#carousel3flatfit').carousel();