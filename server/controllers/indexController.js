const userModel = require('../models/userModel')
const equipoModel = require('../models/equipoModel')
const reporteModel = require('../models/reporteModel')

exports.home = async (req, res) => {

    const usuarios = await userModel.findAll()
    .catch(error => console.log(error))

    const equipos = await equipoModel.findAll()
    .catch(error => console.log(error))

    res.render('index', {message: 'Reporte de Fallas', pageName: 'Formulario', usuarios, equipos})

}

exports.charge = async (req, res) => {
    let data;
    const id = req.params.id

    const usuario = await userModel.findAll({
        where: {
            id
        }
    })
    .catch(error => console.log(error))

    if(usuario){
        data = {
            code: 200,
            msg: usuario[0]
        }
    }else{
        data = {
            code: 404,
            msg: 'User not found'
        }
    }

    return res.status(data['code']).json(data)


}


exports.store = async (req, res) => {

    const { name, fecha, estado,horometro, descripcion, equipo } = req.body
    let errores = []

    if(!name){
        errores.push({mensaje: 'El usuario es requerido'})
    }
    if(!fecha){
        errores.push({mensaje: 'La fecha es requerida'})
    }
    if(!estado){
        errores.push({mensaje: 'El estado es requerido'})
    }
    if(!horometro){
        errores.push({mensaje: 'El horometro es requerido'})
    }
    if(!descripcion){
        errores.push({mensaje: 'La descripcion es requerida'})
    }
    if(!equipo){
        errores.push({mensaje: 'El equipo es requerido'})
    }
    
    if(errores.length){
        return res.render('index', {errores})
    }
    
    try{
        await reporteModel.create({
            fecha, 
            estado, 
            horometro,
            descripcion, 
            id_user: name,
            id_equipo: equipo
        })

        res.redirect('/')

    }catch (err){
        console.error(err)
    }
    

}