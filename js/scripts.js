// Business Logic
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
// The User Experience

$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    console.log(robogerNumberInput);
    let customNumber = parseInt($("robogerAnswer").val());

    
  });
});