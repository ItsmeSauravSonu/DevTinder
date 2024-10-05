const mongoose = require('mongoose');


const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://upskillman01:CSQt5il8bvfxbOdu@namastenode.0j67p.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

