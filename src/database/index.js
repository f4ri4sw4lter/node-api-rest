const { MongoClient, ClientSession } = require("mongodb");
const debug = require("debug")("app:mod-database"); //requerimos debug
const { Config } = require('../config/index');

var conn = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      //Si no existe una conexion...
      if (!conn) {
        const client = new MongoClient(Config.mongoUri); //Cliente para consumir mongo
        conn = await client.connect(); //Establezco la conexion
        debug("Nueva conexion realizada con MongoDB Atlas.");
      }

      debug("Reutilizando conexion existente.");

      //Si ya existe una conexion, consumo la bdd.
      const db = conn.db(Config.mongoDbName);

      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });
