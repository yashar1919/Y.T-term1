function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$(document).ready(function () {

  $(".image").mouseenter(function () {
    $(".image").animate({
      height: "+=10px",
      width: "+=10px"
    });
  });


  $(".image").mouseout(function () {
    $(".image").animate({
      height: "-=10px",
      width: "-=10px"
    });
  });


});
