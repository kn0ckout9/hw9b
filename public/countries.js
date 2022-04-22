// Create JSON object
const travelHistory = {
    "name": "Sam",
    "countries":[
        {
            "name":"Spain",
            "year": 2001,
        },
        {
            "name":"Mexico",
            "year": 2009,
        }
    ]
}

// Grab the button element
const callElement = document.getElementById("button");
callElement.addEventListener("click", myFunction);

function myFunction() {

// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelHistory)
})
  .then(response => response.text())
  .then(result => {
        // log to console for testing
        //console.log(result)
          // Get the div
    const myDiv = document.getElementById("result");

    const myText = document.createElement('p');
    myText.textContent = result;
    myDiv.appendChild(myText)
      
  })
  .catch(err => {
    console.error("Error message is: ", err.message);
})
}