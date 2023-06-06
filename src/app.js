const express = require('express');
const app = express()
const PORT = process.env.PORT||3000;

const alumnosRoute = require('./routes/alumnosRoute');

app.use(express.json());

app.use('/api/alumnos', alumnosRoute);

app.listen(PORT, () => {
    console.log(`App lista escuchando en el puerto ${PORT}`);
})
