const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("othello-react"));

app.listen(3000);