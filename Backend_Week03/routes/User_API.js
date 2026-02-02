import exp from "express";

let users = [];


const userApi = exp.Router();

// GET all users
userApi.get('/', (req, res) => {
    res.json({ message: "All users", payload: users });
});

// POST new user
userApi.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "User created" });
});

// PUT update user
userApi.put('/', (req, res) => {
    let upUser = req.body;
    let upIndex = users.findIndex(user => user.id === upUser.id);
    if (upIndex === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    let delUser = users.splice(upIndex, 1, upUser);
    res.status(200).json({ message: "User found", prevUser: delUser });
});

// GET user by id
userApi.get('/:id', (req, res) => {
    let userId = Number(req.params.id);
    let user = users.find(userObj => userObj.id === userId);
    if (!user) {
        res.status(404).json({ message: "User not found" });
    } else {
        res.status(200).json({ message: "User found", payload: user });
    }
});

// DELETE user by id
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

export default userApi;
