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

function numberIsFive (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "5") {
      return true;
    };
  };
  return false;
};

function numberIsThirteen (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "13") {
      return true;
    };
  };
  return false;
};


function numberIsTwentyOne (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "21") {
      return true;
    };
  };
  return false;
};



function numberIsThirtyTwo (userNumber) {
  let robogerString = userNumber.toString();
  for (number of robogerString) {
    if (number === "32") {
      return true;
    };
  };
  return false;
};

// Business Logic

function roboger (userNumber) {
  let robogerResult = [];
  if (numberIsThirtyTwo(userNumber)){
    return "Won't you be my neighbor!";
  } else if (numberIsThree(userNumber)) {
    return "Won't you be my neighbor!";
  } else if (numberIsTwentyOne(userNumber)) {
    return "Boop!";
  } else if (numberIsTwo(userNumber)) {
    return "Boop!";
  } else if (numberIsThirteen(userNumber)) {
    return "Won't you be my neighbor!";
  } else if (numberIsOne(userNumber)) {
    return "Beep!";
  } else if (numberIsFive(userNumber)) {
    return ('0, ' + '"Beep!"' + ' , ' + '"Boop!"' + ' , ' + "Won't you be my neighbor?" + ', 4, 5');
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
    $("#robogerOutput").show();
    $("#robogerResult").append(roboger(customNumber) + "  ");
  });
});