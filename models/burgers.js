// let orm = require("../config/orm.js");

// let burgers = {
//   all: function (cb) {
//     orm.selectAll("burgers", function (res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function (cols, vals, cb) {
//     orm.insertOne("burgers", cols, name, function (res) {
//       cb(res);
//     });
//   },
//   update: function (devour, condition, cb) {
//     orm.updateOne(devour, condition, function (res) {
//       cb(res);
//     });
//   },
//   delete: function (id, cb) {
//     console.log("Burger ID: " + id + " has been deleted!")
//     orm.deleteOne(id, function (res) {
//       cb(res);
//     })
//   },
//   devoured: function (cb) {
//     orm.devouredBurgers("burgers", function (res) {
//       console.log(res)
//       cb(res);
//     })
//   };

// };

// // Export the database functions for the controller (burgersController.js).
// module.exports = burgers;


// Updating the homework using Justin's webinar.

const orm = require('../config/orm');

const burger = {
  findAll: function (callbackFunction) {
    orm.findAll('burgers', function (resultsData) {
      callbackFunction(resultsData);
    });
  },
  createOne: function (createData, callbackFunction) {
    const columns = ['burger_name', 'devoured'];
    const values = [createData.burger_name, createData.devoured];

    orm.createOne('burgers', columns, values, function (resultsData) {
      callbackFunction(resultsData);
    });
  },
  updateOne: function (updateData, callbackFunction) {
    const condition = `id=${updateData.id}`;
    delete updateData.id;

    orm.updateOne('burgers', updateData, condition, function (resultsData) {
      callbackFunction(resultsData);
    });
  }
};

module.exports = burger;