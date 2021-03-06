require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require('./controladores/index'));



mongoose.connect(process.env.urlDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
    console.log(`escuchango puerto ${process.env.PORT}`);
});