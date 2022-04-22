// Initialize the array
var articlesArray = [];
// Initialize ket
let key = 1;

// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
    // Cancel default behavior of sending a synchronous POST request
    e.preventDefault();
    // Create a FormData object, passing the form as a parameter
    const formData = new FormData(e.target);
  
    // console.log(typeof formData)
    // console.log(formData)

    articlesArray.push({"title": formData.get("title"), "content": formData.get("content"), "key": key});
  

    const articlesDiv = document.getElementById("articlesDiv");

    const myText = document.createElement('p');
    myText.textContent = `New article added successfully with title "${formData.get("title")}" and ID ${key}!`;
    articlesDiv.innerHTML="";
    articlesDiv.appendChild(myText)
    key = key+1;
  
    
  });