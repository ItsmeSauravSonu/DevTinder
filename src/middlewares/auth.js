const adminAuth = (req, res, next)=>{
    console.log("Admin Auth is getting checked");
    const token = "xyzqwerty";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
      res.status(401).send("Unauthorized request");
    }else{
      next();
    }
}

const userAuth = (req, res, next)=>{
    console.log("User Auth is getting checked");
    const token = "xyzxxx";
    const isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
      res.status(401).send("Unauthorized request");
    }else{
      next();
    }
}

module.exports = {
    adminAuth,
    userAuth
};