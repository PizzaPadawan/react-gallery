const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
// require('dotenv').config();
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));
app.use(express.urlencoded({ extended: true }))

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});