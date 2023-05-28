const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE gallery SET "likes"="likes"+1 WHERE "id"=$1;`

    pool.query(queryText, [galleryId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Error updating likes', err);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM gallery ORDER BY id;`

    pool.query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
        console.log('Error retreiving gallery', err);
        res.sendStatus(500);
    });
}); // END GET Route

router.post('/', (req, res) => {
    const path = req.body.path;
    const description = req.body.description;
    const queryText = `INSERT INTO gallery (path, description)
    VALUES ($1, $2);`;

    pool.query(queryText, [path, description])
    .then(() => res.sendStatus(201))
    .catch((err) => console.log('error posting new content', err))
});

router.delete('/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `DELETE FROM gallery WHERE "id"=$1;`

    pool.query(queryText, [galleryId])
    .then(() => res.sendStatus(204))
    .catch((err) => {
        console.log('Error deleting post', err);
        res.sendStatus(500);
    })
});

module.exports = router;