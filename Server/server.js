var express = require("express");
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const apiKey = "5Mp0JfZdnAi9aYO3WuBS8g";

app.use(cors());

app.get("", (req, res) => {
  console.log("dd");
  res.send("엥");
});

app.get("/api/trackingInfo", (req, res) => {
console.log("오긴옴");
  res.header("Access-Control-Allow-Origin", "*");
  var getData = 't_key='+ apiKey +'&t_code='+ req.query.t_code +'&t_invoice='+req.query.t_invoice;
  var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
  console.log(url+getData);
  fetch(url + getData)
    .then(res => res.text())
    .then(json => {

      console.log(json);
      res.send(json)
    });
});
app.all('/*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
});

app.listen(7878, () => {
 console.log("Server running on port 7878");
});
