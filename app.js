const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    console.log("User Registered:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    res.send(`
        <h2>Registration Successful</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
