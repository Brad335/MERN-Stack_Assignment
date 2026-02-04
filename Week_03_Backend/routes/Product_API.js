/*
  Week_03_Backend - routes/Product_API.js
  --------------------------------------
  Simple in-memory product API for assignment evaluation.
  Endpoints:
    GET  /products         - List all products
    POST /products         - Add a product (JSON body)
    PUT  /products         - Update a product (matched by `brand`)
    GET  /products/:brand  - Get product by brand
    DELETE /products/:brand- Remove product by brand

  The module includes small example middleware functions to
  demonstrate middleware execution order.
*/

import exp from "express";

// In-memory store for products
let products = [];

// Router instance
const productApi = exp.Router();

// Example middleware that logs and continues
function middleware1(req, res, next) {
    console.log("Middleware-1 is executed");
    next();
}
function middleware2(req, res, next) {
    console.log("Middleware-2 is executed");
    next();
}

// GET /products - return all products
productApi.get('/', middleware1, (req, res) => {
    // Return a message and the in-memory array
    res.json({ message: "All products", payload: products });
});

// POST /products - add a new product
productApi.post('/', middleware2, (req, res) => {
    // Expect the new product object in the request body
    let newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ message: "Product added" });
});

// PUT /products - update a product by `brand` field
productApi.put('/', (req, res) => {
    const updatedProduct = req.body;
    const idx = products.findIndex(p => p.brand === updatedProduct.brand);
    if (idx === -1) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    const previous = products.splice(idx, 1, updatedProduct);
    res.status(200).json({ message: "Product modified", prevProduct: previous });
});

// GET /products/:brand - fetch product by brand
productApi.get('/:brand', (req, res) => {
    const brand = req.params.brand;
    const product = products.find(p => p.brand === brand);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.status(200).json({ message: "Product found", payload: product });
});

// DELETE /products/:brand - remove product by brand
productApi.delete('/:brand', (req, res) => {
    const brand = req.params.brand;
    const idx = products.findIndex(p => p.brand === brand);
    if (idx === -1) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    products.splice(idx, 1);
    res.status(200).json({ message: "Product deleted" });
});

// Export router for mounting in server.js
export default productApi;