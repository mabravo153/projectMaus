const express = require('express'); 
const app = express()
const rutas = require('./routes')(); 
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config({path: 'var.env'})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', rutas)
app.set('view engine','pug')
app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'))




app.listen(9000, () => console.log('server up')) 