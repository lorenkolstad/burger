// // *****************************************************************************
// // Server.js - This file is the initial starting point for the Node/Express server.
// //
// // ******************************************************************************
// // *** Dependencies
// // =============================================================
// let express = require("express");

// let PORT = process.env.PORT || 8080;

// let app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// let exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// let routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });



const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const burgerController = require('./controller/burgerController');
const htmlRoutes = require('./routes');

const app = express();

//for parsing json in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//configure handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//for our controller routes
//or api routes
app.use(burgerController);
app.use(htmlRoutes);

app.listen(PORT, function () {
  console.log(`PORT IS LISTENING ON ${PORT}`);
});