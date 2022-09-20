const Client = require("../models/Client");
module.exports = {
  CreateClient: (client, callback) => {
    return client
      .save()
      .then((result) => {
        return callback(null, 200, result);
      })
      .catch((error) => {
        return callback(error, 400, null);
      });
  },
  GetList: (callback) => {
    return Client.find({})
      .then((result) => {
        if (!result) return callback("Cannot get list of Clients.", 400, null);
        return callback(null, 200, result);
      })
      .catch((error) => {
        return callback(error, 400, null);
      });
  },
  GetById: (id, callback) => {
    return Client.findById(id)
      .then((result) => {
        if (!result) return callback("Client does not exist.", 400, null);
        return callback(null, 200, result);
      })
      .catch((error) => {
        return callback(error, 400, null);
      });
  },
  UpdateClient: (id, updatedClient, callback) => {
    Client.findOneAndUpdate(
      { _id: id },
      { name: updatedClient.name },
      {
        new: true,
      }
    )
      .then((result) => {
        return callback(null, 200, result);
      })
      .catch((error) => {
        return callback(error, 400, null);
      });
  },
};
