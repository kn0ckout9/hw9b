// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// Load the multer package as a module
const multer = require("multer");

// Access the exported service
const upload = multer();

// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Serve content of the "public and css" subfolder directly
app.use(express.static("css"));

// Define an article list
const countries = [
    { id: 1, title: "First article", content: "Hello World!" },
    {
      id: 2,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
    },
    {
      id: 3,
      title: "Lorem ipsum in French",
      content:
        "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
    }
  ];
  
// Return the index.html for requests to the root URL ("/")
app.get("/", (request, response) => {
    //response.send("Hello from Express!");
    response.sendFile(`${__dirname}/views/index.html`);
});

// // Return a string for requests to the root URL ("/")
// app.get("/", (request, response) => {
//   response.send("Hello from Express!");
// });

  // Return the countries list in JSON format
  // app.get("/api/contries", (request, response) => {
  //   response.json(countries);
  // });

// Return a web page for requests for ex 1
app.get("/ex1", (request, response) => {
  response.sendFile(`${__dirname}/views/ex1.html`);
});

// Handle form data submission to the "/ex1" route
app.post("/ex1", upload.array(), (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.`);
    // for testing add this
    console.log(request.body);
  });

// Return a web page for requests for ex 2
app.get("/countries", (request, response) => {
  response.sendFile(`${__dirname}/views/countries.html`);
});

// Return a web page for requests for ex 3
app.get("/articles", (request, response) => {
  response.sendFile(`${__dirname}/views/articles.html`);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
