const express= require("express");

const app= express();


app.get("/search",(req,res)=>{
    res.send("welcome to my server2");
})

app.listen(4500,async()=>{
   console.log(`server is running on port ${4500}`)
})