// Student Name: Sharath Payili
// Student ID: 1225905683
// Date: 02/18/2024


const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

app.get('/prac', (req, res) => res.send('prac endpoint working'));
router.get('/tester', (req, res) => {
    res.send('Hello World!');
    console.log('triggered');
});

app.use(router);