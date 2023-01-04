const express = require("express"); //requerimos express.
const debug = require("debug")("app:main"); //requerimos debug

const { Config } = require("./src/config/index");
const { ProductsAPI } = require("./src/products/index");

const app = express(); //Iniciamos una app express.

app.use(express.json()); //Le damos la capacidad de recibir json en el request.

ProductsAPI(app);

//Indicamos en que puesto va a escuchar nuestra app.
app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});
