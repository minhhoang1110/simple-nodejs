const { default: mongoose } = require("mongoose");
const Client = require("../models/Client");
const ClientService = require("../services/Client");
module.exports = {
  Create: (req, res) => {
    const client = new Client({
      name: req.body.name,
    });
    ClientService.CreateClient(client, (err, httpCode, result) => {
      if (err) {
        return res.status(httpCode).send({
          http_code: httpCode,
          status: "error",
          success: false,
          message: err.message,
        });
      }
      return res.status(httpCode).send({
        http_code: httpCode,
        status: "ok",
        success: true,
        message: "Create Client Successfully !!!!!",
        data: {
          client: result,
        },
      });
    });
  },
  Get: (req, res) => {
    const id = req.params.id;
    ClientService.GetById(id, (err, httpCode, result) => {
      if (err) {
        return res.status(httpCode).send({
          http_code: httpCode,
          status: "error",
          success: false,
          message: err.message || err,
        });
      }
      return res.status(httpCode).send({
        http_code: httpCode,
        status: "ok",
        success: true,
        message: "Find Client Successfully !!!!!",
        data: {
          client: result,
        },
      });
    });
  },
  GetList: (req, res) => {
    ClientService.GetList((err, httpCode, result) => {
      if (err) {
        return res.status(httpCode).send({
          http_code: httpCode,
          status: "error",
          success: false,
          message: err.message || err,
        });
      }
      return res.status(httpCode).send({
        http_code: httpCode,
        status: "ok",
        success: true,
        message: "Find Clients Successfully !!!!!",
        data: {
          client: result,
        },
      });
    });
  },
  Update: (req, res) => {
    const id = req.params.id;
    const client = new Client({
      name: req.body.name,
    });
    ClientService.UpdateClient(id, client, (err, httpCode, result) => {
      if (err) {
        return res.status(httpCode).send({
          http_code: httpCode,
          status: "error",
          success: false,
          message: err.message || err,
        });
      }
      return res.status(httpCode).send({
        http_code: httpCode,
        status: "ok",
        success: true,
        message: "Update Client Successfully !!!!!",
        data: {
          client: result,
        },
      });
    });
  },
};
