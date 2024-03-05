const express = require('express')
const bodyParser = require('body-parser')
var Mongo = require('mongodb')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req,res)=>{
    // res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.listen(3000)