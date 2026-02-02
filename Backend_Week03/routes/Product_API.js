import exp from "express";

let products = [];

const productApi = exp.Router();

// Example middleware functions
function middleware1(req, res, next) {
    console.log("Middleware-1 is executed");
    next();
}
function middleware2(req, res, next) {
    console.log("Middleware-2 is executed");
    next();
}

// GET all products
productApi.get('/', middleware1, (req, res) => {
    res.json({ message: "All products", payload: products });
});

// POST new product
productApi.post('/', middleware2, (req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ message: "Product added" });
});

// PUT update product by brand
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

// GET product by brand
productApi.get('/:brand', (req, res) => {
    const brand = req.params.brand;
    const product = products.find(p => p.brand === brand);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.status(200).json({ message: "Product found", payload: product });
});

// DELETE product by brand
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

export default productApi;