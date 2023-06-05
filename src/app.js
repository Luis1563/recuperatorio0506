const express = require('express');
const app = express()
const httpStatusCodes = require('http2').constants;
const PORT = process.env.PORT||3000;


app.get('/', (_,res)=>{
    res.status(httpStatusCodes.HTTP_STATUS_OK).json({mensaje: 'Hola Luis', estado: 'OK'});
})

app.post('/', (req, res) => {

})

app.patch('/', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`App lista escuchando en el puerto ${PORT}`);
})
