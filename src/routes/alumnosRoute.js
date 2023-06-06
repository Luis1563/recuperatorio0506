const express = require('express')

const {
    getAlumnos, getAlumnoByDni, updateAlumno, createAlumno
} = require('../controllers/alumnosController')
const alumnosRoute = express.Router()

alumnosRoute.get("/", getAlumnos)
alumnosRoute.get('/:dni', getAlumnoByDni)
alumnosRoute.put('/:dni', updateAlumno)
alumnosRoute.post('/', createAlumno)

module.exports = alumnosRoute