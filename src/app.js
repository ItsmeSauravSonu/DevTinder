const express = require('express');

const app = express();

//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName: "Saurav", LastName: "Sonu"});
})

app.post("/user",(req,res)=>{
    res.send("Data saved successfully to the db!")
})

app.delete("/user",(req,res)=>{
    res.send("data deleted successfully")
})


//this will use all the HTTP method API calls to /test
app.use("/test",(req, res)=>{
    res.send("Hello from the server");
})



app.listen(3000, ()=>{
    console.log("Server is succesfully listening on port 3000....");
});