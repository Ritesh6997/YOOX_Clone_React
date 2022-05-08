const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {  
      
            img: [{ type: String, required: true }],
            name: { type: String, required: true },
        type: { type: String, required: false },
        initialPrice: { type: String, required: false },
        finalPrice: { type: String, required: true },
        color: { type: String, required: false },
        colorName: { type: String, required: false },
        size: [{ type: String, required: false }],
        category: {
            type: String,
            required: true,
            enum: ["men", "women", "kids", "design"],
          },
          show: {
            type: String,
            required: true,
            enum: ["new", "kind"]
          },
          recent:{type:String,default:false}
            
     
    },
    {
        versionKey:false,
    }
);

const User = mongoose.model("user",userSchema)
module.exports = User;