const express = require("express");
const {adminAuth, userAuth} = require("./middlewares/auth")
const app = express();

//Handle Auth MiddleWare for all request GET, POST....
app.use("/admin", adminAuth);
//app.use("/user", adminAuth);

app.get("/user", userAuth, (req, res)=>{
  res.send("User Data sent");
})

app.get("/admin/getAllData",(req, res)=>{
  res.send("All Data Sent");
})

app.get("/admin/deleteUser",(req, res)=>{
  res.send("Deleted a user")
})

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
