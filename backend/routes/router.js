const express = require("express");
const routerApp = express.Router();

const appBanco = require("../apps/banco/controller/ctlBanco");
const appLogin = require("../apps/login/controller/ctlLogin");

routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

routerApp.get("/GetAllBanco", appLogin.AutenticaJWT, appBanco.GetAllBanco);
routerApp.post("/GetBancoByID", appLogin.AutenticaJWT, appBanco.GetBancoByID);
routerApp.post("/InsertBanco", appLogin.AutenticaJWT, appBanco.InsertBanco);
routerApp.post("/UpdateBanco", appLogin.AutenticaJWT, appBanco.UpdateBanco);
routerApp.post("/DeleteBanco", appLogin.AutenticaJWT, appBanco.DeleteBanco);

routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;