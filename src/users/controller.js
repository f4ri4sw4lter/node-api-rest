const createError = require("http-errors");
const { Response } = require("../common/response");
const { UsersServices } = require("./services");

const debug = require("debug")("app:mod-ProductsController");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    try {
      let users = await UsersServices.getAll();
      Response.sucess(res, 200, "Lista de usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getUser: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersServices.getById(id);
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.sucess(res, 200, `Usuario ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length == 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await UsersServices.create(body);
        Response.sucess(res, 200, "Usuario creado", insertedId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
