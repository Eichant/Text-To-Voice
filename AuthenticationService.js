const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = {};


app.post('/api/auth/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!users[username]) {
        users[username] = { email, password };
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Username already exists' });
    }
});


app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

const port = 3000;
app.listen(port, () => console.log(`Authentication Service listening at http://localhost:${port}`));
