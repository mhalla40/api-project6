const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

const app = express();

app.use(bodyParser.json());
app.use(require("./routes"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
