//setting up db connection
const mongoose = require("mongoose");

//name database
mongoose.connect("mongodb://localhost/monsters", { useNewUrlParser: true });

//export db connection
module.exports = mongoose;
