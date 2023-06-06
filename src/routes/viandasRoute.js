const express = require('express')
//const {Router} = require('express')
const {getViandas, getViandasByCodigo, updateVianda} = require('../controllers/viandasController')
const viandasRoute = express.Router()

viandasRoute.get("/", getViandas)
viandasRoute.get("/:codigo", getViandasByCodigo)
viandasRoute.put("/:codigo", updateVianda)
//viandasRoute.post("/:codigo", createVianda)

module.exports = viandasRoute