// Import Express
const express = require("express");

// Create Express application
const app = express();

// Middleware to read JSON data from request body
app.use(express.json());


// ==========================================
// DUMMY DATABASE
// ==========================================

let users = [
    {
        id: 1,
        name: "Yogesh",
        email: "yogesh@gmail.com",
        age: 26
    },
    {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 24
    },
    {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com",
        age: 23
    }
];


// ==========================================
// GET - Get All Users
// ==========================================

// API: GET /users
app.get("/users", (req, res) => {

    // Send all users as JSON response
    res.status(200).json(users);
});


// ==========================================
// GET BY ID - Get Single User
// ==========================================

// API: GET /users/:id
app.get("/users/:id", (req, res) => {

    // Get ID from URL
    // Example: /users/2
    // req.params.id = "2"
    const id = Number(req.params.id);

    // Find user with matching ID
    const user = users.find((user) => user.id === id);

    // If user doesn't exist
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Send the user as response
    res.status(200).json(user);
});


// ==========================================
// POST - Create New User
// ==========================================

// API: POST /users
app.post("/users", (req, res) => {

    // Get data from request body
    const { name, email, age } = req.body;

    // Basic validation
    if (!name || !email || !age) {
        return res.status(400).json({
            message: "Name, email and age are required"
        });
    }

    // Create new user object
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        age: age
    };

    // Add new user to dummy database
    users.push(newUser);

    // Send response
    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});


// ==========================================
// BASIC SERVER
// ==========================================

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});