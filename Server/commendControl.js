const apiKey = "5Mp0JfZdnAi9aYO3WuBS8g";
const fetch = require('node-fetch');
const history = require('./DataContainer').history;
const testCase1 = require('./DataContainer').testCase1;
const controll = {
  getAllHistory(req,res){
      res.send(history);
  },
  testCase(req,res){
      res.send(testCase1);
  },
   getTrackingInfo(req,res){
    //res.header("Access-Control-Allow-Origin", "*");
    var getData = 't_key='+ apiKey +'&t_code='+ req.body.code +'&t_invoice='+req.body.invoice;
    var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
    fetch(url + getData)
      .then(res => res.json())
      .then(json => {
        json.invoice = req.body.invoice;
        json.code = req.body.code;
        history.historyUpdate(json);
        res.send(json)
    });
  },
  trackingInfo(req,res){
    //res.header("Access-Control-Allow-Origin", "*");
    var getData = 't_key='+ apiKey +'&t_code='+ req.body.code +'&t_invoice='+req.body.invoice;
    var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
    fetch(url + getData)
      .then(res => res.json())
      .then(json => {
        json.invoice = req.body.invoice;
        json.code = req.body.code;
        history.historyUpdate(json);
        res.send(json)
      });
  },
}

module.exports = controll;
