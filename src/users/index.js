const express = require("express");
const router = express.Router();

const { UsersController } = require("./controller");

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUsers) //http://localhost:3000/api/products
    .get("/:id", UsersController.getUser) //http://localhost:3000/api/products/id
    .post("/", UsersController.createUser); //http://localhost:3000/api/products

  app.use("/api/users", router);
};
