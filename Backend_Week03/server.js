// Import express 
import exp from "express" 
import User_API from "./User_API.js"; 
import Product_API from "./Product_API.js"; 
// Create server
const app = exp(); 
app.use(exp.json());
// Middleware to parse JSON bodies 
app.use("/users", User_API);
app.use("/products", Product_API); 
const PORT = 3000;
app.listen(PORT, () => {
     console.log("Server running on port ${PORT}");
    });