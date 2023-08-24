import express from 'express';
import cors from 'cors';
import ruta from '../routes/users.js';

class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuarioPath='/api/usuarios';
        //middlewares
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //cors() -- seguridad de mi rest
        this.app.use(cors())

        //Directorio publico
        this.app.use(express.static('public'))

        //Lectura y parseo del body
        this.app.use(express.json())
    }  

    routes(){
        //tengo que configurar la ruta 
        this.app.use(this.usuarioPath,ruta);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Se esta escuchando en el puerto ', this.port);
        });
    }
}

export default Server;