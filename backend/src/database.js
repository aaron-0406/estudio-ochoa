const mysql = require("mysql2");
const { promisify } = require("util");

const config = require("./config").database;

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
    if (err.code === "PROTOCOL_CONNECTION_LOST")
      return console.error("DATABASE CONNECTION WAS CLOSED");
    if (err.code === "ER_CON_COUNT_ERROR")
      return console.error("DATABASE HAS TO MANY CONNECTIONS");
    if (err.code === "ECONNREFUSED")
      return console.error("DATABASE CONNECTION WAS REFUSED");
  }
  //Obtener connection, con release empieza la conexión.
  if (connection) {
    connection.release();
    console.log("DB is Connected");
    return;
  }
});

//Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
