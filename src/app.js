const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res,next) => {
    console.log("Handling the route user!!")
    
    next();
    res.send("Response!!!1")
  },
  (req, res) => {
    console.log("2nd Response.........")
    res.send("2nd Response");
  }
);

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
