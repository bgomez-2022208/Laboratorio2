const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';
        this.petsPath = '/api/pets';

        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/user.routes'));
        this.app.use(this.petsPath, require('../routes/pets.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutandose y esacuchando el puerto', this.port)
        });
    }
}

module.exports = Server;