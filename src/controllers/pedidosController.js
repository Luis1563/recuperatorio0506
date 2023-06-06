const pedidos = require ('../../data/pedidos.json')
const alumnos = require ('../../data/alumnos.json')
const viandas = require('../../data/viandas.json')

const httpStatusCodes = require('http2').constants

const getPedidos = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(pedidos)
}

const getPedidoById = (req, res) => {
    const id = req.params.id;
    const resultado = pedidos.find((p) => p.id == id);
    if (resultado){
        res.json(resultado)
    } else {
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({mensaje: `El pedido con id ${id} no pudo ser encontrado`})
    }
}

const updatePedido = (req, res) => {
    const {dni, tipo} = req.body
    const alumnoIdx = alumnos.findIndex((al) => al.dni == dni && al.habilitado)
    if (alumnoIdx == -1){
        res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({mensaje: `El alumno con DNI ${dni} ya se encuentra registrado o esta inhabilitado`})
        return
    }
    let alumno = {...alumnos[alumnoIdx]}
    delete alumno.habilitado
}



module.exports = {
    getPedidos,
    getPedidoById,
    updatePedido
}
