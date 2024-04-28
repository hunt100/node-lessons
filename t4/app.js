'use strict';

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const uuidv4 = require("uuidv4");

app.use(express.json());

const filePath = path.join(__dirname, "users.json");

let users;
try {
    users = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (ignore) {
    users = [];
}

app.get("/users", (req, res) => {
    res.send({users});
});

app.get("/users/:id", (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    if (user) {
        res.send({user});
    } else {
        res.status(404).send({error: "User not found"});
    }
});

app.post("/users", (req, res) => {
    const user = {
        id: uuidv4.uuid(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    }
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users));
    res.status(201).send({user});
});

app.put("/users/:id", (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    if (user) {
        user.name = req.body.name;
        user.email = req.body.email;
        user.age = req.body.age;
        fs.writeFileSync(filePath, JSON.stringify(users));
        res.send({user});
    } else {
        res.status(404).send({error: "User not found"});
    }
});

app.delete("/users/:id", (req, res) => {
    const userIndex = users.findIndex((user) => user.id === req.params.id);
    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(users));
        res.status(204).send({});
    } else {
        res.status(404).send({error: "User not found"});
    }
});


const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
