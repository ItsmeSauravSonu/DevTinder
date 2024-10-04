const express = require("express");

const app = express();


// GET /users  => It checks all the app.xxx('matching route') functions 
// middlewareChain => request handler


app.get(
  "/user",
  (req, res,next) => {
    console.log("Handling the route user!!");
    next();
  },
  (req, res,next) => {
    console.log("Handling the route user!!");
    next();
  },
  (req, res,next) => {
    console.log("Handling the route user!!");
    next();
  },
  (req, res,next) => {
    console.log("Handling the route user!!");
    res.send("Response!!!......")
  }
);




app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
