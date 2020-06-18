const apiKey = "5Mp0JfZdnAi9aYO3WuBS8g";
const fetch = require('node-fetch');

const controll = {
  testCase(req,res){
      res.send(testCase1);
  },
   getTrackingInfo(req,res){
    //res.header("Access-Control-Allow-Origin", "*");
    var getData = 't_key='+ apiKey +'&t_code='+ req.body.code +'&t_invoice='+req.body.invoice;
    var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
    fetch(url + getData)
      .then(res => res.text())
      .then(json => {
        console.log(json);
        res.send(json)
    });
  },
  trackingInfo(req,res){
    //res.header("Access-Control-Allow-Origin", "*");
    var getData = 't_key='+ apiKey +'&t_code='+ req.body.code +'&t_invoice='+req.body.invoice;
    var url = 'http://info.sweettracker.co.kr/api/v1/trackingInfo?';
    fetch(url + getData)
      .then(res => res.text())
      .then(json => {
        console.log(json);
        res.send(json)
      });
  },
}

module.exports = controll;


const testCase1 = '{"result":"Y","senderName":"주식*","receiverName":"손병*","itemName":"카멜","invoiceNo":"631693783814","receiverAddr":"경기도 안양*****","orderNumber":null,"adUrl":null,"estimate":"15∼17시","level":5,"complete":false,"recipient":"","ite'+
'mImage":null,"trackingDetails":[{"time":1592265739000,"timeString":"2020-06-16 09:02:19","code":null,"where":"서울금천남독산","kind":"집화처리","telno":"070-4202-3324","telno2":"","remark":null,"level":2,"manName":"","manPic":""},{"time"'+
':1592298129000,"timeString":"2020-06-16 18:02:09","code":null,"where":"금천","kind":"간선상차","telno":"02-1588-1255","telno2":"","remark":null,"level":3,"manName":"","manPic":""},{"time":1592345114000,"timeString":"2020-06-17 07:05:14",'+
'"code":null,"where":"곤지암Hub","kind":"간선하차","telno":"","telno2":"","remark":null,"level":3,"manName":"","manPic":""},{"time":1592346123000,"timeString":"2020-06-17 07:22:03","code":null,"where":"곤지암Hub","kind":"간선하차","telno"'+
':"","telno2":"","remark":null,"level":3,"manName":"","manPic":""},{"time":1592346692000,"timeString":"2020-06-17 07:31:32","code":null,"where":"곤지암Hub","kind":"행낭포장","telno":"","telno2":"","remark":null,"level":3,"manName":"","man'+
'Pic":""},{"time":1592346763000,"timeString":"2020-06-17 07:32:43","code":null,"where":"곤지암Hub","kind":"간선상차","telno":"","telno2":"","remark":null,"level":3,"manName":"","manPic":""},{"time":1592364852000,"timeString":"2020-06-17 1'+
'2:34:12","code":null,"where":"동안","kind":"간선하차","telno":"","telno2":"","remark":null,"level":3,"manName":"","manPic":""},{"time":1592368238000,"timeString":"2020-06-17 13:30:38","code":null,"where":"경기안양범계","kind":"배달출발'+
'(배달예정시간:15∼17시)","telno":"010-3669-3846","telno2":"01046244502","remark":null,"level":5,"manName":"이항범","manPic":""}],"productInfo":null,"zipCode":null,"firstDetail":{"time":1592265739000,"timeString":"2020-06-16 09:02:19","'+
'code":null,"where":"서울금천남독산","kind":"집화처리","telno":"070-4202-3324","telno2":"","remark":null,"level":2,"manName":"","manPic":""},"completeYN":"N","lastDetail":{"time":1592368238000,"timeString":"2020-06-17 13:30:38","code":nul'+
'l,"where":"경기안양범계","kind":"배달출발(배달예정시간:15∼17시)","telno":"010-3669-3846","telno2":"01046244502","remark":null,"level":5,"manName":"이항범","manPic":""},"lastStateDetail":{"time":1592368238000,"timeString":"2020-06-17'+
' 13:30:38","code":null,"where":"경기안양범계","kind":"배달출발(배달예정시간:15∼17시)","telno":"010-3669-3846","telno2":"01046244502","remark":null,"level":5,"manName":"이항범","manPic":""}}';
