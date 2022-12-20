const express = require("express");
const bodyParer = require("body-parser");

const app = express();

app.use(bodyParer.urlencoded({ extended: true }));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("the result of the calculetion is : " + result);
});
app.listen(3000, function () {
  console.log("it is running in port no 3000");
});
