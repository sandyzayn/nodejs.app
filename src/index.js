console.log("Welcome to the Node.js Demo Application!");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is the Node.js Demo Application.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});