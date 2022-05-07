const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    useId: {  type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail',
        required: true,},
    productId: { type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,},
    count:{type:Number,default:1}
});

const CartData = mongoose.model("cartData", cartSchema);

module.exports = CartData;
