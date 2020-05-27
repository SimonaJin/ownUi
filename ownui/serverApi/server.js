const express = require('express');
const app = express();
app.use(express.static(__dirname));
//端口
let hostname ='localhost';
let hostPort= 3000; 
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
app.listen(hostPort,hostname,function(){
    console.log("running....");
})
const arr=[];
for(let i =1; i<20;i++){
    arr.push(`http://${hostname}:${hostPort}/image/${i}.jpg`)
}
app.get('/public/getSlider',(req,res)=>{
    res.json(arr);
})