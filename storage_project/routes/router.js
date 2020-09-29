const {InMemoryStorage} =require('../index');
const express = require('express');
var router = express.Router();

let inMemoryStorage =new InMemoryStorage();

router.get('/api/users', (req, res) => {
    res.json(inMemoryStorage.storage);
})

router.get('/api/users/:id', (req, res) => {
    res.json(inMemoryStorage.getByName(req.params.id));
})

router.post('/api/user', (req, res) => {
    try {
        let collectionName =Object.keys(req.body)[0];
        inMemoryStorage.create(collectionName, req.body[collectionName]);
        
        res.json(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(404);
    }
   
});

module.exports = router;