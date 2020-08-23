// Defining Functions

function robogerInput (customNumberString) {
  console.log("customNumberString");
  const robogerArray = numberUpdate(customNumberString);
}

function numberUpdate(resultingNumber)
  let customNumberArray = [];
  for (let num = 0; num <= parseInt(resultingNumber); num++) {
     customNumberArray.push(String(num));
  }

//function numberUpdate()
// User Input to Output
//function robogerConvert

// The User Experience

$(document).ready(function() {
  $("#robogerNumberInput").submit(function(event) {
    event.preventDefault();
    console.log(robogerNumberInput);
    let customNumber = parseInt($("robogerAnswer").val());

    
  });
});