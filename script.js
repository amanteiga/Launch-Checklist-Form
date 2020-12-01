// Write your JavaScript code here!

  
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then( function(json1) {
            const missionTarget = document.getElementById("missionTarget");
            let planet=json1[Math.floor(Math.random() * json1.length)]; 
            // console.log(json[2]);
            {
                missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet.name}</li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance}</li>
                    <li>Number of Moons: ${planet.moons}</li>
                </ol>
                <img src="${planet.image}">
                `
            };        
        });
    });
});   
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelName = document.querySelector("input[name=fuelLevel");
   let cargoMassName = document.querySelector("input[name=cargoMass]");
   
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelName.value === "" || cargoMassName.value ==="") {
           alert("All fields are required!");
           event.preventDefault(); 
       } else if (isNaN( pilotNameInput.value) === false) {
       alert("Please enter a valid Pilot's name!");
       event.preventDefault();
       } else if (isNaN( copilotNameInput.value) === false) {
       alert("Please enter a valid Co-pilot's name!");
       event.preventDefault();
       } else if (isNaN( fuelLevelName.value) === true) {
           alert("Please enter a number!");
           event.preventDefault();
       } else if (isNaN( cargoMassName.value) === true) {
           alert("Please enter a number!");
           event.preventDefault();
       };
  
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    pilotStatus.innerHTML = `
                 Pilot ${pilotNameInput.value} is ready for launch 
            `; 
    copilotStatus.innerHTML = `
                Co-pilot ${copilotNameInput.value} is ready for launch
                `;
                // console.log(fuelLevelName.value);
    if (fuelLevelName.value < 10000) {
        faultyItems.style.visibility = 'visible'; 
        fuelStatus.innerHTML = `There is not enough fuel for the journey`; 
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
        event.preventDefault();
    };
    if (cargoMassName.value > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
        event.preventDefault();
    };
    if (cargoMassName.value <= 10000 && fuelLevelName.value >=10000) {
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle is ready for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch'
        fuelStatus.innerHTML = 'Fuel level high enough for launch'
        launchStatus.style.color = 'green';
        event.preventDefault();
    };
    
    });  
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
