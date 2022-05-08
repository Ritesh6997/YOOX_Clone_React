const express = require("express");
const app = express();

app.use(express.json());
const userController = require("./controllers/user.controllers");

app.use("/products",userController);






module.exports = app;