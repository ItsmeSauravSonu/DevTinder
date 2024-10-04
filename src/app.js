const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res,next) => {
    //Route Handler
    //res.send("Route Handler 1");
    console.log("Handling the route user!!");
    //res.send("Response!");
    next();
  },
  (req, res) => {
    //Route Handler 2
    console.log("Handling the route user2!!");
    res.send("2nd Response!");
  }
);

app.listen(3000, () => {
  console.log("Server is succesfully listening on port 3000....");
});
