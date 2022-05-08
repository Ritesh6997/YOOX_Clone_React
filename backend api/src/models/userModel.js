const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name: {type:String,required:true},
    email:{ type:String, required:true},
    password:{ type:String},
    dob: {type:String},
    number:{type:Number}
})

 const UserDetails = new mongoose.model("UserDetail",userSchema);

 module.exports = UserDetails