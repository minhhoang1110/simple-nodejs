const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  //   public_key: {
  //     type: String,
  //   },
});
module.exports = mongoose.model("Clients", ClientSchema);
