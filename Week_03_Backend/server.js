/*
     Week_03_Backend - server.js
     ---------------------------------
     Small Express server that mounts two routers:
          - /users    -> User_API (user CRUD in-memory)
          - /products -> Product_API (product CRUD in-memory)

     This file is the application entrypoint for the assignment backend.
     It configures JSON body parsing and starts the HTTP server.
*/

// Import express and route modules
import exp from "express";
import User_API from "./User_API.js";
import Product_API from "./Product_API.js";

// Create Express application
const app = exp();

// Built-in middleware: parse incoming JSON request bodies
app.use(exp.json());

// Mount routers - each router handles its own path and handlers
app.use("/users", User_API);
app.use("/products", Product_API);

// Server port for local development (can be overridden by env in future)
const PORT = 3000;

// Start the HTTP server
app.listen(PORT, () => {
     // Use template literal so the port value is printed correctly
     console.log(`Server running on port ${PORT}`);
});