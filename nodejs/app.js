const express = require("express");
var proxy = require('express-http-proxy');

const app = express();

app.use("/api-1", proxy("https://reqres.in"));
app.use("/api-2", proxy("https://api.sampleapis.com"));

const port = 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});