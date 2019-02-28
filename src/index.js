import 'dotenv/config';

console.log('Hello ever running Node.js project.');

const userCredentials = {firstName : 'Sreedhar'};
const userDetails = {profession : 'software developer'};
const user = {userCredentials, userDetails};
console.log(user);

console.log(process.env.MY_SECRET);

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(user));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));