const express = require('express')
const app = express()
const port = 5001
const mongoose = require('mongoose');

const { urlencoded, json } = require('body-parser');
mongoose.connect('mongodb+srv://hyesun:qwer1234@boilerplate.x7hkm.mongodb.net/boilerplate?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected....'))
.catch(err => console.log('err'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})