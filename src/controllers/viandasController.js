const viandas = require('../../data/viandas.json')
const httpStatusCodes = require('http2').constants;

const getViandas = (_, res) => {
    res.status(httpStatusCodes.HTTP_STATUS_OK).json(viandas)
}

const getViandasByCodigo = (req, res) => {
    const codigo = req.params.codigo
    const resultado = viandas.find((c) => c.codigo == codigo)
    if( resultado){
        res.json(viandas)
    } else {
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json({error: 'Vianda no encontrada'})
    }
}

const updateVianda = (req, res) => {
    const codigo = req.params.codigo
    const {aptoCeliaco, stock, descripcion} = req.body
    const vianda = viandas.find((v) => v.codigo == codigo)
    if (!vianda){
        res.status(httpStatusCodes.HTTP_STATUS_NOT_FOUND).json ({error: 'El codigo de vianda solicitado es inexistente'})
        return
    } 
    if (aptoCeliaco != undefined){
        vianda.aptoCeliaco = aptoCeliaco
    }
    if (vianda.stock >= 0){
        vianda.stock = stock
    }
    if (descripcion != undefined){
        vianda.descripcion = descripcion
    }
    
}
const createVianda = (req, res) => {
    const {codigo, tipo, aptoCeliaco, stock, descripcion} = req.body
    const existingCod = viandas.find((v) => v.codigo == codigo)
    if (existingCod){
        res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({error: `La vianda con codigo ${codigo} ya está registrada`})
        return
    }
    
    const codigoRegex = /^V[A-Z]{4}$/
    if (!codigoRegex.test(codigo)){
        res.status(httpStatusCodes.HTTP_STATUS_BAD_REQUEST).json({error: 'El código debe tener el formato VXXXX'})
        return
    }
    let resultado = viandas.map((v) => v.stock == 0)

    const newVianda = {
        codigo,
        tipo,
        aptoCeliaco,
        stock,
        descripcion
    }
}


module.exports = {
    getViandas,
    getViandasByCodigo,
    updateVianda
}