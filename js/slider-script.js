
 $(document).ready(function(){
  $(".hover-shadow").click(function(){
    $('#myModal').css('display','block');
    $('#foc').css('opacity', '0.7');
    $('#all').css('opacity', '0.7');
    $('#all2').css('opacity', '0.7');
    $('#menu').css('opacity', '0.7');
  });
});
$(document).ready(function(){
  $(".closeImg").click(function(){
    $('#myModal').css('display','none');
    $('#foc').css('opacity', '1.0');
    $('#all').css('opacity', '1.0');
    $('#all2').css('opacity', '1.0');
    $('#menu').css('opacity', '1.0');
  });
});
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
