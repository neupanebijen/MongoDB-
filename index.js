require("@babel/register")
require("dotenv").config()

console.log("Outer File")
exports = module.exports = require("./src")
