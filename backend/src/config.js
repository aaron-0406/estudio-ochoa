const dotenv = require("dotenv");
dotenv.config(); // Cargar variables de entorno desde el archivo .env

module.exports = {
  database: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.PORT,
    dateStrings: true,
  },
};
