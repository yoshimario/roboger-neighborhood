// Business Logic

// The User Experience

$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    console.log(robogerNumberInput);
    let customNumber = parseInt($("robogerAnswer").val());

    
  });
});