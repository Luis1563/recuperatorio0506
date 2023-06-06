const alumnos = require('../../data/alumnos.json')
const httpStatusCodes = require('http2').constants


const getAlumnos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(alumnos)
}

const getAlumnoByDni = (req, res) => {
    const dni = req.params.dni;
    const resultado = alumnos.find((alumno) => alumno.dni == dni);
    if (resultado) {
      res.status(httpStatusCodes.HTTP_STATUS_OK).json(resultado);
    } else {
      res
        .status(httpStatusCodes.HTTP_STATUS_NOT_FOUND)
        .json({ mensaje: `El alumno con dni ${dni} no fue encontrado` });
    }
  }

  const updateAlumno = (req, res) => {
      const {dni} = req.params
      const {habilitado, celiaco, edad} = req.body
      const resultado = alumnos.find((alumno) => alumno.dni == dni);

      if(!resultado){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({mensaje: `Eror el alumno con DNI ${dni} no fue encontrado`})
        return
      } 
      if(habilitado !== undefined){
        resultado.habilitado = habilitado
      }
      if (celiaco !== undefined){
          resultado.celiaco = celiaco
      }
      if (edad >= 18 && edad <= 99 ){
          resultado.edad = edad
      } else {
          console.log('ERROR la edad del alumno debe ser entre 18 y 99 anios')
      }
      res.json({mensaje: 'Alumno actualizado con exito', alumnos})
    }

    const createAlumno = (req, res) => {
        const {dni, nombre, habilitado, celiaco, edad} = req.body
        const existingDni = alumnos.find((a) => a.dni == dni)
        if(existingDni){
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({error: `El alumno con DNI ${dni} ya esta registrado`})
        }
        if (dni < 9999999 && dni > 99999999){
           res.status(httpStatusCodes.HTTP_STATUS_OK).json({mensaje: 'El numero de DNI cumple con los parametros solicitados'})
        } else {
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({mensaje: 'El numero de DNI no cumple con los requisitos de tener 8 cifras'})
        }

        if (habilitado == undefined){
            habilitado = true
        }
        if (celiaco == undefined){
            celiaco = false
        }
        if(edad > 18 && edad < 99){
            alumno.edad = edad
            res.status(httpStatusCodes.HTTP_STATUS_OK).json({mensaje: 'La edad ingresada cunple con los parametros solicitados'})
        } else {
            res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({mensaje: 'La edad ingresada no cumple con los requisitos'})
        }
        alumno.nombre = nombre

        const newAlumno = {
            dni,
            nombre,
            habilitado,
            celiaco,
            edad
        }

        alumnos.push(newAlumno)
        res.status(httpStatusCodes.HTTP_STATUS_CREATED).json({mensaje: 'Alumno creado correctamente', alumnos: newAlumno})

    }
  

module.exports = {
    getAlumnos,
    getAlumnoByDni,
    updateAlumno,
    createAlumno
}
