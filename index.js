const express = require("express"); //requerimos express.
const debug = require("debug")("app:main"); //requerimos debug

const { Config } = require("./src/config/index");
const { ProductsAPI } = require("./src/products/index");
const { UsersAPI } = require("./src/users/index");

const app = express(); //Iniciamos una app express.

app.use(express.json()); //Le damos la capacidad de recibir json en el request.

ProductsAPI(app); //Implemento modulo products
UsersAPI(app); //Implemento modulo users

//Indicamos en que puesto va a escuchar nuestra app.
app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`);
});
