let connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
let orm = {
  // This is a method (a function on an object). "selectWhere" is the key and the rest is the value.

    selectAll: function(req, res) {
        let queryString = "SELECT * FROM burgers WHERE ?? = ?";
        connection.query(queryString, [req, res])
    };

    selectAll();
    insertOne();
    updateOne();


//   selectWhere: function(tableInput, colToSearch, valOfCol) {
//     let queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   selectAndOrder: function(whatToSelect, table, orderCol) {
//     let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
//     console.log(queryString);
//     connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
//     let queryString =
//       "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

//     connection.query(
//       queryString,
//       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
//       function(err, result) {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//   }
// };

module.exports = orm;
