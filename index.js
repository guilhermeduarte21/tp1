const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ API: "ok" });
});

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`API RODANDO NA PORTA ${PORT}`);
});
