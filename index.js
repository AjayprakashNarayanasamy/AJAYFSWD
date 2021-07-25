
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const axios = require("axios");



const weatherRouter = require("./routes/weather");



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());




app.use("/weather", weatherRouter);


app.listen(3000);