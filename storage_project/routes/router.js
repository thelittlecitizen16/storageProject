const {InMemoryStorage} =require('../index');
const express = require('express');
var router = express.Router();

let inMemoryStorage =new InMemoryStorage();

router.get('/api/users', (req, res) => {
    res.json(inMemoryStorage.storage);
})

router.get('/api/users/:id', (req, res) => {
    res.json(inMemoryStorage.storage[req.params.id]);
})

router.post('/post-test', (req, res) => {
    let collectionName =Object.keys(req.body)[0];
    inMemoryStorage.create(collectionName, req.body[collectionName]);
    res.sendStatus(200);
});

module.exports = router;