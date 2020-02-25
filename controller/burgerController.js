// let express = require("express");
// let burgers = require("../models/burgers.js");
// let router = express.Router();

// // Create all our routes and set up logic within those routes where required.
//     router.get("/", function(req, res) {
//         burgers.all(function(data) {
//         let hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//         });
//     });

//     router.post("/api/burgers", function(req, res) {
//         burgers.create([
//         "burger_name", "devoured"
//         ], [
//         req.body.burger_name, 
//         req.body.devoured
//         ], function(result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//         });
//     });

//     router.put("/api/burgers/:id", function(req, res) {
//         let condition = "id = " + req.params.id;

//         console.log("condition", condition);

//         burgers.update({
//         devoured: req.body.devoured
//         }, condition, function(result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//         });
//     });

//     // Export routes for server.js to use.
//     module.exports = router;


// Redoing this homework using Justin's webinar.

const app = require('express').Router();

//import our model specifically for the burger
const burger = require('../models/burgers');

app.get('/api/burgers', function (req, res) {
    burger.findAll(function (results) {
        res.json(results);
    });
});
app.post('/api/burgers', function (req, res) {
    burger.createOne(req.body, function (results) {
        res.json(results);
    });
});
app.put('/api/burgers', function (req, res) {
    burger.updateOne(req.body, function (results) {
        console.log('results: ', results);
        res.json(results);
    });
});

module.exports = app;