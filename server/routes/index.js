const express = require('express')
const Routes = express.Router()
const indexController = require('../controllers/indexController')

const rutas = () => {

    Routes.get('/', indexController.home)

    Routes.get('/charge/:id', indexController.charge)

    Routes.post('/formulario', indexController.store)


    return Routes

}


module.exports = rutas