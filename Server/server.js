var express = require("express");
const fetch = require('node-fetch');
var bodyParser = require('body-parser')
var app = express();

const apiKey = "5Mp0JfZdnAi9aYO3WuBS8g";

app.get("", (req, res) => {
  res.send("엥");
});

app.get("/url", (req, res) => {

  var getData = 't_key='+ apiKey +'&t_code='+ req.query.t_code +'&t_invoice='+req.query.t_invoice;
  var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
  console.log(url+getData);
  fetch(url + getData)
    .then(res => res.text())
    .then(json => res.send(json));
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
