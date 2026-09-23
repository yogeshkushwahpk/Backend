const express = require("express");
// app
const app = express();

// app middleware
app.use(express.json());

// tem Database
let users = [
  {
    id: 1,
    name: "Yogesh",
    age: 25,
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
  },

  {
    id: 3,
    name: "Priya",
    age: 34,
  },
];

// test Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// User Routes
app.get("/users", (req, res) => {
  // res.send("Hello From Users Routes")
  res.json(users);
});


// POST - Create New User
app.post("/users", (req, res) => {

  // Step 1: Get data from request body
  const { name, age } = req.body;

  // Step 2: Generate new ID
  const newId = users.length + 1;

  // Step 3: Create new user object
  const newUser = {
    id: newId,
    name: name,
    age: age
  };

  // Step 4: Add new user to users array
  users.push(newUser);

  // Step 5: Send response
  res.json({
    success: true,
    message: "User Created Successfully",
    data: newUser
  });

});


// Get Single User
app.get("/users/:id", (req, res) => {

  // Step 1: Get id from URL which is sent by client
  const userId = Number(req.params.id);

  // Step 2: Find single user using userId
  const user = users.find((u) => u.id === userId);

  // Step 3: Check whether user exists
  if (!user) {
    return res.send({
      msg: "User Not Found With this id"
    });
  }

  // Step 4: Send user data
  res.send({
    success: true,
    data: user
  });
});
 

// 4. PUT - Replace Complete User
app.put("/users/:id", (req, res) => {

  // Step 1: Get user ID from URL
  const userId = Number(req.params.id);

  // Step 2: Get new data from request body
  const { name, role } = req.body;

  // Step 3: Find the index/position of the user
  const index = users.findIndex((u) => u.id === userId);

  // Step 4: Replace the old user with new user
  users[index] = {
    id: userId,
    name,
    role
  };

  // Step 5: Send updated user as response
  res.status(200).json({
    success: true,
    message: "User replaced successfully",
    data: users[index]
  });

});


// DELETE - Delete User
app.delete("/users/:id", (req, res) => {

  // Step 1: Get ID from URL
  const userId = Number(req.params.id);

  // Step 2: Find user's index
  const index = users.findIndex((u) => u.id === userId);

  // Step 3: Remove user from array
  const deletedUser = users.splice(index, 1);

  // Step 4: Send response
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser
  });

});


// PATCH - UPDATE PART OF USER
app.patch("/users/:id", (req, res) => {

  // Step 1: Get ID from URL
  const userId = Number(req.params.id);

  // Step 2: Find the user
  const user = users.find((u) => u.id === userId);

  // Step 3: Check whether user exists
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  // Step 4: Get data from request body
  const { name, role } = req.body;

  // Step 5: Update name only if provided
  if (name !== undefined) {
    user.name = name;
  }

  // Step 6: Update role only if provided
  if (role !== undefined) {
    user.role = role;
  }

  // Step 7: Send updated user
  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user
  });

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
  