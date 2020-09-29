const {InMemoryStorage, InMemorySharedStorage} =require('./storage_project/index');
const express = require('express')
const app = express()
const port = 8000

app.use(express.json());
app.use(express.urlencoded());
app.use(require('./storage_project/routes/router'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


