// Business Logic

function roboger (userNumber) {
  let robogerResult = [];
    for (u = 0; u<=userNumber; u++) {
      robogerResult.push(u);
    };
    robogerResultString = robogerResult.join(", ");
    return robogerResultString;
  };
};

// The User Experience

$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    const customNumber = parseInt($("#userNumber").val());
    $("#robogerOutput").show();
    $("#robogerResult").append(roboger(customNumber) + "  ");
  });
});