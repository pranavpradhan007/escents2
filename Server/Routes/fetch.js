const express = require("express");
const routes = require("express").Router();
require("../db/connection");
const Product = require("../model/product");
const razorpay = require('razorpay');
require('dotenv').config();

routes.get("/", (req, res) => {
    res.send("Hello from the server");
});

//get all products
routes.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

//get a specific product based on id in the url
routes.get("/item/:id", async (req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id });
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }
});

//razorpay payment gateway

routes.post('/razorpay', async (req, res) => {

    try{
        const instance = new razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const payment_capture = 1;
        const amount = req.body.amount;
        const currency = 'INR';

        const options = {
            amount: 348 * 100,
            currency,
            //generate order id
            receipt: "receipt#1" ,
            payment_capture
        }

        const response = await instance.orders.create(options);
        console.log(response);
        //console.log(response);
        if(!response){
            return res.status(500).send("Something went wrong");
        }

        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    }
    catch(err){
        console.log(err);
    }
});

routes.post("/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");

        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = routes;