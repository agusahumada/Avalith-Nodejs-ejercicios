const express = require("express");
const routes = require("./Routes/routes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/", routes());

app.listen(PORT, () => {
    console.log(`Se prendio el puerto ${PORT}`);
  });