$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const heightInput = parseInt($("input#height").val());
    console.log(heightInput);
    if (heightInput >= 48) {
      $(".tallRides").addClass("highlightRide");
      $(".mediumRides").addClass("highlightRide");
      $(".shortRides").addClass("highlightRide");
    } else if (heightInput >= 24) {
      $(".mediumRides").addClass("highlightRide");
      $(".shortRides").addClass("highlightRide");
    } else {
      $(".shortRides").addClass("highlightRide");
    }
  });
});