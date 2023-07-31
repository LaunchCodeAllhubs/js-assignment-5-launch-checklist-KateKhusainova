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
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
   let numberInput = Number(testInput)
   if(testInput == "") {
    return "Empty";
   } else if(isNaN(numberInput)) {
    return "Not a Number";
   } else if(!isNaN(numberInput)) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) =="Empty" || validateInput(cargoLevel)=="Empty") {
     alert("All fields are required");
   } else if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
     alert("Make sure to enter valid information for each field!");
   } else if(validateInput(pilot) =="Is a Number" || validateInput(copilot) == "Is a Number") {
     alert("Make sure to enter valid information for each field!");
   } else {
     list.style.visibility = "visible";
     document.getElementById("pilotStatus").innerHTML=`Pilot ${pilot} is ready for launch`;
     document.getElementById("copilotStatus").innerHTML=`Co-pilot ${copilot} is ready for launch`;
      if (fuelLevel<10000){
         document.getElementById("fuelStatus").innerHTML=`Fuel level too low for launch`;
         document.getElementById("launchStatus").innerHTML=`Shuttle Not Ready for Launch`;
         list.style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         ///if (cargoLevel>10000){
            //document.getElementById("cargoStatus").innerHTML=`Cargo mass too heavy for launch`;
         //}
      } else if(cargoLevel>10000) {
        document.getElementById("cargoStatus").innerHTML=`Cargo mass too heavy for launch`;
        document.getElementById("launchStatus").innerHTML=`Shuttle Not Ready for Launch`;
        list.style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "#C7254E";
      } else if(fuelLevel>=10000 && cargoLevel<=10000){
        document.getElementById("launchStatus").innerHTML=`Shuttle is Ready for Launch`;
        document.getElementById("launchStatus").style.color = "#419F6A";
        list.style.visibility = "visible";
      }
   }  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json();

    });

    return planetsReturned;
}

function pickPlanet(planets) {
   let randomPlanet = Math.floor(Math.random()*planets.length);
   return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
