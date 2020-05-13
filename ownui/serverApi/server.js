const express = require('express');
const app = express();
app.use(express.static(__dirname));
//端口
let hostname ='127.0.0.1';
let hostPort= 3000; 
app.listen(hostPort,hostname,function(){
    console.log("running....");
})
app.listen(hostPort);
const arr=[];
for(let i =1; i<20;i++){
    arr.push(`http://${hostname}:${hostPort}/image/${i}.jpg`)
}
app.get('/api/img',(req,res)=>{
    res.json(arr);
})