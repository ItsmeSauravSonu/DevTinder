const express = require("express");

const app = express();

app.get("/admin/getAllData",(req, res)=>{
  //Logic of Check if the request is authorized
  const token = "xyz"
  const isAdminAuthorized = token === "xyz"
  if(isAdminAuthorized){
    res.send("All Data sent")
  }else{
    res.status(401).send("Unauthorized request");
  }
})

app.get("/admin/deleteUser",(req, res)=>{
  //Logic of Check if the request is authorized
  res.send("Deleted a user")
})

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
