const createError = require("http-errors");
const { Response } = require("../common/response");
const { ProductsServices } = require("./services");
const debug = require("debug")("app:mod-ProductsController");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    try {
      let products = await ProductsServices.getAll();
      Response.sucess(res, 200, "Lista de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProduct: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsServices.getById(id);
      if (!product) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.sucess(res, 200, `Producto ${id}`, product);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createProduct: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length == 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await ProductsServices.create(body);
        Response.sucess(res, 200, "Producto creado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  generateReport: async (req, res) => {
    try {
      ProductsServices.generateReport("Inventory", res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
