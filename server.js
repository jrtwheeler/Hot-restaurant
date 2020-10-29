const express = require('express');
var path = require("path");
const table = require('./data/tabledata');
const waitlist = require('./data/waitingdata');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route Handling
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/" + "table.html"));
});

// APIs
app.get("/api/reserve", function(req, res) {
  return res.json(table);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
})

app.post("/api/reserve", function(req, res) {
  let newReserv = req.body;

  console.log(newReserv);

  table.push(newReserv);
  res.json(newReserv);
})

// app.post("/api/waitlist", function(req, res) {
//   let newWait = req.body;

//   console.log(newWait);

//   table.push(newWait);
//   res.json(newWait);
// })

// Initializing Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});