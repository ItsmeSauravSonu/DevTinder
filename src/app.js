const express = require('express');

const app = express();

// /ac /abc
app.get("/ab?c",(req,res)=>{
    res.send({firstName: "Saurav", LastName: "Sonu"});
})





app.listen(3000, ()=>{
    console.log("Server is succesfully listening on port 3000....");
});