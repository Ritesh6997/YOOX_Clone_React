const express = require("express");
const router = express.Router()
const WishlistData = require("../models/wishlistModel");
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const wishlistData = await WishlistData.find({ useId: req.params.id }).populate({ path:"productId"}).lean().exec()
        return res.status(200).send({ "wishlistData": wishlistData }) 
    } catch (err) {
        return res
            .status(500)
            .send({ message: err.message });
    }
});
router.post('/', async (req, res) => {
    try {
        const wishlistData = await WishlistData.create(req.body)
        return res.status(201).send(wishlistData);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const wishlistData = await WishlistData.findByIdAndDelete(req.params.id)
        return res.status(200).send(wishlistData);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
});

module.exports = router;