const express = require("express")

const {
    getPedidos, getPedidoById, updatePedido
} = require('../controllers/pedidosController')

const pedidosRoute = express.Router()

pedidosRoute.get("/", getPedidos)
pedidosRoute.get("/:id", getPedidoById)
pedidosRoute.post("/:id",updatePedido)




module.exports = pedidosRoute
