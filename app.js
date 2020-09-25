const storageApi =require('./storage_project');
const express = require('express');

const app = express();

const inMemoryShared =new storageApi.InMemorySharedStorage();

app.get('/api/users/{userId}', (req,res) => {
    //const user =inMemoryShared.find('users',)
    res.json({"name":"afek"});
});

app.use(function (err, req, response, next){
    response.status(400).send('Error!')
});


app.listen('3000',() => {console.log("app listen in 3000")});






