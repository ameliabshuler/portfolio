$(document).ready(function(){
        $("#carouselFashionDesign").carousel();
   $("#carouselFashionDesign").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carouselFashionDesign").swipeleft(function() {
      $(this).carousel('next');
   });
});
$('#cumminsModal1').modal();