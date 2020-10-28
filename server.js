const express = require('express');
var path = require("path");
const table = require('./data/tabledata');
const waitlist = require('./data/waitlist');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route Handling
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "table.html"));
});

// APIs
app.get("/api/reservations", function(req, res) {
  return res.json(table);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
})

// Initializing Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});