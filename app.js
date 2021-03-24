const express = require('express');
const cors = require('cors');
require('dotenv').config();

const config = require('./config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || config.port;  

app.use(cors());

// serve static files (html css js img)
app.use(express.static('public'));

// register routes
app.use(routes);

// 404 not found
app.use(function(req, res, next){
    res.status(404);

    if (req.get('Content-Type') !== 'application/json') {
        res.redirect(404, '404.html');
    }
    
    res.end();
});

// handle exceptions
app.use((err, req, res) => {
    res.status(500).json({error: err});
});

async function startServer() {
    try {
        await app.listen(PORT);
        console.log(`Listening on port=${PORT}`);
    } catch (error) {
        console.error(error);
    }
}

startServer();