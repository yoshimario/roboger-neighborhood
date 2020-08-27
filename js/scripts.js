// Business Logic

  function roboger(userNumber) {
    let robogerResult = [];

    for(u=0; u <= userNumber; u +=1) {
      let robogerString = u.toString();
      if (robogerString.includes("3")) {
        robogerResult.push("Won't you be my neighbor?");
        console.log(robogerResult);
      } else if (robogerString.includes("2")) {
        robogerResult.push("Boop");
        console.log(robogerResult);
      } else if (robogerString.includes("1")) {
        robogerResult.push("Beep!");
        console.log(robogerResult);
      } else {
        robogerResult.push(u);
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
    $("#robogerResult").text(roboger(customNumber) + "  ." + " Thank you for playing!");
  });
});