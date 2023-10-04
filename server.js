var express=require ('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req,res)=>{
    app.send("welcome to cdac");
});
app.listen(8080);
console.log("app is listening on port 8080");