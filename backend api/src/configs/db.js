const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://yooxData:09876@cluster0.xkjyv.mongodb.net/test");
};