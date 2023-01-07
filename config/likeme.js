//Importar la clase Pool del paquete pg
const { Pool } = require('pg')

//Crear una instancia de la clase Pool usando un objeto de configuración con las credenciales.

const credentials = {
    host: 'postgresql-guslopezr.alwaysdata.net',
    user: 'guslopezr',
    password: 'Gus@0920',
    database: 'guslopezr_likeme',
    port: '5432',
    allowExitOnIdle: true
}

const likemeDB = new Pool(credentials);

const getDate = async() => {
    const resultado = await likemeDB.query("SELECT NOW()")
    console.log(resultado);
    return resultado;
    //    const result = await pool.query("SELECT NOW()")
}
getDate()

module.exports = likemeDB;