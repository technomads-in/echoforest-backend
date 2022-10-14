const express = require("express");
require("./src/db/conn");
const cors = require("cors");
const routes = require("./src/router/eco");
require("dotenv").config();
const port = process.env.PORT;

const app = express()
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.all("*", (req, res) => {
  return res.status(200).send("URL not found. Ecoforest");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});