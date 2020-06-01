//=====
// PUERTO
//=====
process.env.PORT = process.env.PORT || 3000;

//=====
// ENTORNO
//=====
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=====
// VENCIMIENTO TOKEN
//=====
//60seg
//60mins
//24hrs
//30dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//=====
// SEED AUTENTIFICACION
//=====
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//=====
// BASE DE DATOS
//=====

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.urlDB = urlDB;