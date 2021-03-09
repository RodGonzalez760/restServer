const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        
        
        // Middlewares = Funciones que le añaden otras funcionalidades a mi webServer, son funciones que se ejecutarán siempre que levante el servidor
        this.middlewares();
        
        // Lectura y parse del body
        // Le decimos que la información que viene del frontend al backend mediante las peticiones http va a venir en formato JSON, por tanto convertirá la informacion a json
        // se configura en el controlador
        this.app.use( express.json() )

        // Mis Rutas
        this.routes();
    }


    middlewares() {
        // el .use  es la palabra clave que indica que lo que estamos utilizando es un middleware

        // CORS
        this.app.use( cors() )


        // Directorio público, esta quedará como la ruta principal, por lo cual en routes ya no utilizaremos la ruta '/'
        this.app.use( express.static('public') )

    }


    routes() {

        this.app.use( this.usuariosPath, require('../routes/user.routes'));

    }

    
    listen() {

        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`)
        });
    }
}


module.exports = Server;