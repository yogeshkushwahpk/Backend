// Import Express
const express = require("express");

// Create an Express application
const app = express();

// Port number where our server will run
const PORT = 3000;


// MIDDLEWARE
// express.json() allows our server to read JSON data
// sent from the client in the request body
app.use(express.json());



// This is our temporary database
let users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Kunal", role: "student" }
];



// 1. GET Route - GET ALL USERS
app.get("/api/users", (req, res) => {

  // Send users as JSON response
  res.status(200).json({
    success: true,
    count: users.length,
    data: users
  });
});




// 2. POST - CREATE NEW USER
// Data will come from req.body
app.post("/users", (req, res) => {

  // Get name and role from request body
  // Example body:
  // {
  //   "name": "Rahul",
  //   "role": "student"
  // }
  const { name, role } = req.body;

  // Generate a new id
  const newId = users.length + 1;

  // Create a new user object
  const newUser = {
    id: newId,
    name,
    role
  };

  // Add the new user to our array
  users.push(newUser);
  // Send the newly created user as response
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});



// 3. GET - GET SINGLE USER
// :id is a dynamic value called a route parameter
app.get("/api/users/:id", (req, res) => {

  // Get the id from the URL
  // req.params.id gives us the value of :id
  const userId = Number(req.params.id);

  // Find the user whose id matches the URL id
  const user = users.find((u) => u.id === userId);

  // Send the found user as response
  res.status(200).json({
    success: true,
    data: user
  });
});




// 4. PUT - REPLACE COMPLETE USER
app.put("/users/:id", (req, res) => {

  // Get id from URL
  const userId = Number(req.params.id);

  // Get new data from request body
  const { name, role } = req.body;

  // Find the position/index of the user in the array
  const index = users.findIndex((u) => u.id === userId);

  // Replace the old user with the new user
  users[index] = {
    id: userId,
    name,
    role
  };

  // Send updated user as response
  res.status(200).json({
    success: true,
    message: "User replaced successfully",
    data: users[index]
  });
});



// 5. PATCH - UPDATE PART OF USER
app.patch("/users/:id", (req, res) => {

  // Get id from URL
  const userId = Number(req.params.id);

  // Find the user
  const user = users.find((u) => u.id === userId);

  // Get data from request body
  const { name, role } = req.body;

  // If name is provided, update the name
  if (name !== undefined) {
    user.name = name;
  }

  // If role is provided, update the role
  if (role !== undefined) {
    user.role = role;
  }

  // Send updated user
  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user
  });
});


// 6. DELETE - DELETE USER
app.delete("/users/:id", (req, res) => {
  // Get id from URL
  const userId = Number(req.params.id);

  // Find the position/index of the user
  const index = users.findIndex((u) => u.id === userId);

  // Remove the user from the array
  // splice(index, 1) means:
  // Start from this index and remove 1 item
  const deletedUser = users.splice(index, 1);

  // Send deleted user as response
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser
  });
});



// START SERVER
app.listen(PORT, () => {
  // This message will appear in the terminal
  console.log(`CRUD API server running at http://localhost:${PORT}`);
});