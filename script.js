// Write your JavaScript code here!

// part one    
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
       }  
       if (isNaN( pilotNameInput.value) === false) {
       alert("Please enter a valid Pilot's name!");
       event.preventDefault();
       }
       if (isNaN( copilotNameInput.value) === false) {
       alert("Please enter a valid Co-pilot's name!");
       event.preventDefault();
       }
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
                console.log(fuelLevelName.value);
    if (fuelLevelName.value < 10000) {
        faultyItems.style.visibility = 'visible'; 
        fuelStatus.innerHTML = `There is not enough fuel for the journey`; 
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
        event.preventDefault();
       event.preventDefault();
    };
    if (cargoMassName.value > 10000) {
        faultyItems.style.visibility = 'visible';
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red';
        event.preventDefault();
    };
    if (cargoMassName.value <= 10000 && fuelLevelName.value >=10000) {
        faultyItems.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle is ready for launch.';
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
