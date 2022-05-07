const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
    useId: {  type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetail',
        required: true,},
    productId: { type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,}
});

const WishlistData = mongoose.model("wishlistData", wishlistSchema);

module.exports = WishlistData;