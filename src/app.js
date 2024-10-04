const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth")
const app = express();


app.get("/getUserData",(req, res)=>{

  try{
    throw new Error("ddhdhdhdh")
    res.send("User Data sent");
  }
  catch(err){
    res.status(500).send("Some error contact support")
  }
  
})

app.use("/", (err, req, res, next)=>{
  if(err){
    //Log your error 
    res.status(500).send("Something went wrong")
  }
})

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
