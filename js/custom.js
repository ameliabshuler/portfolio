$(document).ready(function(){
        $("#carouselFashionDesign").carousel();
   $("#carouselFashionDesign").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carouselFashionDesign").swipeleft(function() {
      $(this).carousel('next');
   });
});
function appear(id) {
    document.getElementById(id).style.visibility = "visible";
}