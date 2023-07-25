// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let numberInput = Number(testInput)
   if(testInput === "") {
    return "Empty";
   } else if(isNaN(numberInput)) {
    return "Not a number";
   } else if(!isNaN(numberInput)) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) ==="Empty" || validateInput(cargoLevel)==="Empty") {
    alert("All fields are required")
   } else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel)==="Not a number") {
    alert("You must enter a number in this field")
   } else if(validateInput(pilot) ==="Is a number" || validateInput(copilot) === "Is a number") {
    alert("You must NOT enter a number in this field")
   }
   
}  

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
