let connection = require("../config/connection.js");


// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
// let orm = {
//   // This is a method (a function on an object). "selectWhere" is the key and the rest is the value.

//     selectAll: function(req, res) {
//         let queryString = "SELECT * FROM burgers WHERE ?? = ?";
//         connection.query(queryString, [req, res])
//     };

//     selectAll();
//     insertOne();
//     updateOne();
//   };

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//   let array = [];

//   for (let i = 0; i < num; i++) {
//     array.push("?");
//   }

//   return array.toString();
// }

// Helper function to convert object key/value pairs to SQL syntax
// function convertObjectToSql(object) {
//   let array = [];

// loop through the keys and push the key/value as a string int arr
// for (let key in object) {
//   let value = object[key];
// check to skip hidden properties
// if (Object.hasOwnProperty.call(object, key)) {
// if string with spaces, add quotations (Cheeseburger => 'Cheeseburger')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {burger_name: 'Cheeseburger'} => ["burger_name='Cheeseburger'"]
//       // e.g. {devoured: false} => ["devoured=false"]
//       array.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// let orm = {
//   selectAll: function (tableInput, cb) {
//     let queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
//   insertOne: function (table, cols, vals, cb) {
//     let queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += ") ";
//     queryString += "VALUES (";
//     queryString += printQuestionMarks(vals.length);
//     queryString += ") ";

//     console.log(queryString);

//     connection.query(queryString, vals, function (err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },
//   // An example of objColVals would be {burger_name: Cheeseburger, devoured: false}
//   updateOne: function (table, objColVals, condition, cb) {
//     let queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function (err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },

//   deleteOne: function (updatedBurgers, cb) {
//     console.log(updatedBurgers);

//     let queryString = "DELETE " + table;

//     queryString += "FROM ";
//     queryString += objToSql(objColVals);
//     queryString += "WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function (err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   }
// };

// // Export the orm object for the model (burgers.js).



// Re-doing the Burger App after Justin's webinar. 

function generateQuestionMarks(number) {
  let array = [];

  for (let i = 0; i < number; i++) {
    array.push('?');
  }

  return array.toString();
}

function covertObjectToSQL(obj) {
  const array = [];
  for (let keys in obj) {
    array.push(keys + '=' + obj[keys]);
  }

  var temp = array.toString();

  return temp;
}

const orm = {
  findAll: function (tableName, callbackFunction) {
    const queryString = `SELECT * FROM ${tableName}`;

    connection.query(queryString, function (err, results) {
      if (err) {
        throw err;
      }

      callbackFunction(results);
    });
  },
  createOne: function (tableName, columns, values, callbackFunction) {
    // const queryString = `INSERT INTO ${tableName} (burger_name, devoured) VALUES ( ?, ? )`;
    const queryString = `INSERT INTO ${tableName}
		(${columns.toString()}) VALUES
		(${generateQuestionMarks(values.length)})`;
    connection.query(queryString, values, function (err, results) {
      if (err) {
        throw err;
      }
      callbackFunction(results);
    });
  },
  updateOne: function (tableName, values, condition, callbackFunction) {
    // Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'burger,devoured=true WHERE id=1' at line 2
    const queryString = `UPDATE ${tableName} SET ${covertObjectToSQL(values)} WHERE ${condition}`;

    connection.query(queryString, function (err, results) {
      if (err) {
        throw err;
      }

      callbackFunction(results);
    });
  }
};

// orm.createOne('burgers', ['burger_name', 'devoured'], ['random test', false]);
// orm.createOne("cats");


module.exports = orm;
