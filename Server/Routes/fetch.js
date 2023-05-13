const express = require("express");
const routes = require("express").Router();
require("../db/connection");
const Product = require("../model/product");

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

module.exports = routes;