const express = require("express");

const usersController = require("./controllers/user.controllers");

const app = express();

app.use(express.json());

app.use("/user", usersController); // http://localhost:5000/users will go to usersController

module.exports = app;
