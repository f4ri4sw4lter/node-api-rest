require("dotenv").config(); //Incluimos dotenv al proyecto.

module.exports.Config = {
  //declaracion de variables de entorno en Config
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  mongoDbName: process.env.MONGO_DBNAME,
};
