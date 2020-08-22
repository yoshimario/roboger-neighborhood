$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    console.log(robogerNumberInput);
    let customNumber = parseInt($("#customNumber").val());
 
    console.log(customNumber);

    $("span.customNumber").text(customNumber);
  });
});