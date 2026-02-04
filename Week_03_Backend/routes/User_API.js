/*
  Week_03_Backend - routes/User_API.js
  -----------------------------------
  Simple in-memory user API for assignment evaluation.
  Endpoints:
    GET  /users         - List all users
    POST /users         - Create a new user (JSON body)
    PUT  /users         - Update existing user (matches by `id`)
    GET  /users/:id     - Retrieve a user by numeric id
    DELETE /users/:id   - Delete user by id

  Note: This uses an in-memory `users` array (no database). It's
  sufficient for demonstrating REST endpoints in the assignment.
*/

import exp from "express";

// In-memory store for users during runtime
let users = [];

// Create a router instance to export
const userApi = exp.Router();

// GET /users - return all users
userApi.get('/', (req, res) => {
    // Respond with a helpful message and the current payload
    res.json({ message: "All users", payload: users });
});

// POST /users - create a new user
userApi.post('/', (req, res) => {
    // Expect the new user object in the request body
    let newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "User created" });
});

// PUT /users - update an existing user by id
userApi.put('/', (req, res) => {
    // Client should send the full user object with an `id` property
    let upUser = req.body;
    let upIndex = users.findIndex(user => user.id === upUser.id);
    if (upIndex === -1) {
        // If not found, return 404
        res.status(404).json({ message: "User not found" });
        return;
    }
    // Replace the existing user and return the previous value
    let prevUser = users.splice(upIndex, 1, upUser);
    res.status(200).json({ message: "User updated", prevUser: prevUser });
});

// GET /users/:id - fetch a specific user by numeric id
userApi.get('/:id', (req, res) => {
    let userId = Number(req.params.id);
    let user = users.find(userObj => userObj.id === userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json({ message: "User found", payload: user });
    }
});

// DELETE /users/:id - remove a user by id
userApi.delete('/:id', (req, res) => {
    let delId = Number(req.params.id);
    let delIndex = users.findIndex(user => user.id === delId);
    if (delIndex === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    users.splice(delIndex, 1);
    res.status(200).json({ message: "User deleted" });
});

// Export the router so it can be mounted by the main server
export default userApi;
