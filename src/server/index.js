const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

const baseURL = "https://api.textrazor.com/";
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = [];

app.get('/', function (req, res) {
  res.send("This is the server API page, you may access its services via the client app.");
});


app.post("/api", async function (req, res) {
  const textInput = req.body.url;
  console.log(`Text input: ${req.body.url}`);

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-textrazor-key": apiKey,
      },
      body: new URLSearchParams({
        extractors: "entities,entailments",
        text: textInput,
      }),
    });

    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error("Error calling API:", error);
    res.status(500).send({ error: "Failed to fetch data from API" });
  }
});

app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
