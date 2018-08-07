const express = require("express");
const app = express();
app.use("/css", express.static("./css"));
app.use("/img", express.static("./img"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/links/Videorental.html");
});

app.get("/titanic", function(request, response) {
  response.sendFile(__dirname + "/links/titanic.html");
});

app.get("/deadpool.html", function(request, response) {
  response.sendFile(__dirname + "/links/deadpool.html");
});

app.get("/darknight.html", function(request, response) {
  response.sendFile(__dirname + "/links/darknight.html");
});

app.get("/spiderman.html", function(request, response) {
  response.sendFile(__dirname + "/links/spiderman.html");
});
app.get("/pokemon.html", function(request, response) {
  response.sendFile(__dirname + "/links/pokemon.html");
});

app.get("/bruce.html", function(request, response) {
  response.sendFile(__dirname + "/links/bruce.html");
});
app.get("/ironman.html", function(request, response) {
  response.sendFile(__dirname + "/links/ironman.html");
});

app.get("/suicidesquade.html", function(request, response) {
  response.sendFile(__dirname + "/links/suicidesquade.html");
});

app.get("/titanic.html", function(request, response) {
  response.sendFile(__dirname + "/links/titanic.html");
});

app.get("/harry.html", function(request, response) {
  response.sendFile(__dirname + "/links/harry.html");
});

app.listen(8080);
console.log("started running on http://127.0.0.1:8080/");
