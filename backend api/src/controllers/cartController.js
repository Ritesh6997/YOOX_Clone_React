const express = require("express");
const router = express.Router()
const CartData = require("../models/CartModel");
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const Cartdata = await CartData.find({ useId: req.params.id }).populate({ path:"productId"}).lean().exec()
        return res.status(200).send({ "CartData": Cartdata }) 
    } catch (err) {
        return res
            .status(500)
            .send({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const Cartdata = await CartData.create(req.body)
        return res.status(201).send(Cartdata);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});
router.patch('/:id', async (req, res) => {
    try {
        console.log(1);
        const Cartdata = await CartData.findByIdAndUpdate(_id=req.params.id,req.body, {
            new: true,
        })
            .lean()
            .exec()
        return res.status(200).send(Cartdata);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const Cartdata = await CartData.findByIdAndDelete(req.params.id)
        return res.status(200).send(Cartdata);
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
});

module.exports = router;