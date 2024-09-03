// Create web server
// 1. Create a new file for the server
// 2. Import express
// 3. Create a new express server
// 4. Create a new route for the comments
// 5. Set up the route to send back the comments
// 6. Listen on a port
// 7. Start the server
// 8. Test the server in the browser
// 9. Test the server in the terminal

// 2. Import express
const express = require('express');

// 3. Create a new express server
const app = express();

// 4. Create a new route for the comments
app.get('/comments', (req, res) => {
  res.send('This is a test comment');
});

// 6. Listen on a port
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

// 7. Start the server
// node comments.js

// 8. Test the server in the browser
// http://localhost:4001/comments

// 9. Test the server in the terminal
// curl http://localhost:4001/comments

// Create a new route for the users
app.get('/users', (req, res) => {
  res.send('This is a test user');
});

// Test the server in the terminal
// curl http://localhost:4001/users

// Test the server in the browser
// http://localhost:4001/users

// Create a new route for the posts
app.get('/posts', (req, res) => {
  res.send('This is a test post');
});

// Test the server in the terminal
// curl http://localhost:4001/posts

// Test the server in the browser
// http://localhost:4001/posts