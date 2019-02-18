var express=require("express");
var app = express();

app.get("/",function(req,res){
      console.log("form");
   res.render("home.ejs");  
});


app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server is begin now onwards."); 
});