const express = require("express");
const app = express();
var calculator = require("./src/Calculator");

app.get("/", function (req, res) {
  res.send(`Hello World! A soma de 2 + 2 é: ${calculator.sum(2, 2)}`);
});

app.listen(5000, function () {
  console.log("🚀 Servidor rodando na porta 5000");
});
