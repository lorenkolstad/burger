let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "a1ae8tl4ix8awu2t",
    password: "vwpjbb67ymg8ykpt",
    database: "yzizzfxsd30i21dd"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
