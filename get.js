var get=require("http");
 
var here=get.createServer((req,res)=>{

   if(req.method==="GET"){
     res.write("we are  in GET method")

   }
   else if(req.method==="POST"){
    res.write("we are in POST method")
   }
   else if(req.method==="PUT"){
    res.write("we are in PUT method")
   }
   else if(req.method==="PATCH"){
    res.write("we are in PATCH method")
   }
   else{
    res.write("hii")
   }
  res.end()
})

      var port=344
      here.listen(port,()=>{

        console.log("server code"+port)
      })