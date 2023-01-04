const express = require("express");
const router = express.Router();

const { ProductsController } = require("./controller");

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts) //http://localhost:3000/api/products
    .get("/report", ProductsController.generateReport)
    .get("/:id", ProductsController.getProduct) //http://localhost:3000/api/products/id
    .post("/", ProductsController.createProduct); //http://localhost:3000/api/products
    
  app.use("/api/products", router);
};
