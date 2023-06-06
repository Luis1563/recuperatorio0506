const express = require('express');
const { getPedidos } = require('./controllers/pedidosController');
const app = express()
const PORT = process.env.PORT||3000;

const alumnosRoute = require('./routes/alumnosRoute');
const pedidosRoute = require('./routes/pedidosRoute');
const viandasRoute = require('./routes/viandasRoute');


app.use(express.json());

app.use('/api/alumnos', alumnosRoute);
app.use('/api/viandas', viandasRoute);
app.use('/api/pedidos', pedidosRoute)

app.listen(PORT, () => {
    console.log(`App lista escuchando en el puerto ${PORT}`);
})
