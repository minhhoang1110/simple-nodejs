const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { dbURI } = require("./configs/db");
const app = express();
app.use(bodyParser.json());

// set up mongoose
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch((error) => {
    console.log(`Error connecting to database: ${error}`);
  });

const result = dotenv.config({ path: ".env" });
if (result.error) {
  throw result.error;
}
const { parsed: env } = result;

// Set up apis router
app.use("/api/v1/clients", require("./routes/Client"));

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

module.exports = app;
