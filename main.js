const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("othello-react/dist"));
app.listen(3000);