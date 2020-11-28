// Write your JavaScript code here!

// part one    
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let copilotNameInput = document.querySelector("input[name=copilotName]");
   let fuelLevelName = document.querySelector("input[name=fuelLevel");
   let cargoMassName = document.querySelector("input[name=cargoMass]");
   form.addEventListener("submit", function(event) {
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
   });
   
});
//part three (on index.html page)



//part two 


// function editList(){
//    
//     // let bottomList = (pilotNameInput.value)
//     faultyItems.setAttribute("pilotStatus", bottomList)
// };   
//question for TAs: Why does pilotStatus not update?
window.addEventListener("submit", function(){ 
    let faultyItems = document.querySelector("id=faultyItems");
    // let pilotStatus = document.querySelector("input[id=pilotStatus]");
    // let copilotStatus = document.querySelector("input[id=copilotStatus");   
    faultyItems.addEventListener("submit", function() {   
       faultyItems.innerHTML = `
            <ol>
                <li id="pilotStatus"> Pilot ${pilotNameInput} is ready for launch </li>
            </ol>
            `; 
        // copilotStatus.innerHTML = `
        //     Co-pilot ${copilotNameInput}  is ready for launch
        //     `;
      });
   });

// let pilotNameInput = document.querySelector("input[name=pilotName]");
// document.getElementById("[li=pilotStatus").innerHTML = `Pilot ${pilotNameInput} ready for takeoff.`;
   

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
