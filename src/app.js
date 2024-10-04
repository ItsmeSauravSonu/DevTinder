const express = require("express");

const app = express();

// ap.use("/router", rh1, rh2, [rh3,rh4])

app.use(
  "/user",
  [
  (req, res,next) => {
    //Route Handler
    //res.send("Route Handler 1");
    console.log("Handling the route user!!");
    
    next();
    //res.send("Response!");
  },
  (req, res, next) => {
    //Route Handler 2
    console.log("Handling the route user2!!");
    //res.send("2nd Response!");
    next();
  }
]
  ,
  (req, res, next) => {
    //Route Handler 3
    console.log("Handling the route user3!!");
    //res.send("2nd Response!");
    next();
  },
  (req, res, next) => {
    //Route Handler 4
    console.log("Handling the route user4!!");
    res.send("4th Response!");
    //next();
  }
);

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
