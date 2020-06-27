const express = require("express");
const bodyParser = require('body-parser');
const controll = require('./commendControl');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser());

app.get("/api/getAllHistory",(req,res)=>{controll.getAllHistory(req,res);});

app.get("/test/case1", (req, res) => {  controll.testCase(req,res); });

app.get("/api/getTrackingInfo", (req, res) => {controll.getTrackingInfo(req,res);});

app.post("/api/trackingInfo", (req, res) => {  controll.trackingInfo(req,res);});

app.listen(7878, () => { console.log("Server running on port 7878");});
