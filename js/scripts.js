// Business Logic

  function roboger(userNumber) {
    let robogerResult = [];

    for(i=0; i <= userNumber; i +=1) {
      let numberString = i.toString();
      if (numberString.includes("3")) {
        robogerResult.push("Won't you be my neighbor?");
        console.log(robogerResult);
      }
    };
    robogerResultString = robogerResult.join(", ");
    return robogerResultString;
  };

// The User Experience

$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    const customNumber = parseInt($("#userNumber").val());
    $("#robogerOutput").show();
    $("#robogerResult").text(roboger(customNumber) + "  ");
  });
});