const express= require('express');
var app = express();
app.get('',(req,res)=>{
    res.send("hello this is my home page");
});
app.get('/about',(req,res)=>{
    res.send("this is my about page");
});
app.listen(2300);