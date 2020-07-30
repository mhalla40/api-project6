const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(require("./routes"));

app.listen(3000, () => console.log("listening on port 3000"));
