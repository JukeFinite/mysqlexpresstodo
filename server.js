const express = require('express');
// The filename index is a special name in Node
// If we require a folder in Node and we don't specify a file name
// Node will automatically look for an index.js inside of that folder
const routes = require('./routes');

const PORT = 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Any route that goes to slash,
// Have the router object inside of routes
// handle the routing for us
app.use(routes);

app.listen(PORT);
