// Program defined respsonses
function numberIsOne (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "1") {
      return true;
    };
  };
  return false;
};

function numberIsTwo (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "2") {
      return true;
    };
  };
  return false;
};

function numberIsThree (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "3") {
      return true;
    };
  };
  return false;
};

// Business Logic

function roboger (userNumber) {
  let robogerResult = [];
  if (numberIsOne(userNumber)) {
    return "Beep!";
  } else if (numberIsTwo(userNumber)) {
    return "Boop!";
  } else if (numberIsThree(userNumber)) {
    return "Won't you be my neighbor!";
  } else {
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
    $("#robogerResult").append(roboger(customNumber) + "  ");
    
  });
});