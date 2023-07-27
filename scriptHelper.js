// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
   `;
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
   } else {
    document.getElementById("pilotStatus").innerHTML=`Pilot ${pilotName} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML=`Co-pilot ${copilotName} is ready for launch`;
    if (validateInput(fuelLevel)<10000){
        document.getElementById("fuelStatus").innerHTML=`Fuel level too low for launch`;
        document.getElementById("launchStatus").innerHTML=`Shuttle Not Ready for Launch`;
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "red";
     } else if(validateInput(cargoLevel)>10000) {
        document.getElementById("cargoLevel").innerHTML=`Cargo mass too heavy for launch`;
        document.getElementById("launchStatus").innerHTML=`Shuttle Not Ready for Launch`;
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "#C7254E";
    } else if(validateInput(fuelLevel)>=10000 && validateInput(cargoLevel)<=10000){
        document.getElementById("launchStatus").innerHTML=`Shuttle is Ready for Launch`;
        document.getElementById("launchStatus").style.color = "#419F6A";
    }
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
