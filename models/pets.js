const {Schema, model} = require('mongoose');

const PetsSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre de la mascota es obligatorio']
    },
    raza:{
        type: String,
        require: [true, 'La raza es obligatoria']
    },
    tipo:{
        type: String,
        require: [true, 'El tipo es obligatorio']
    },
    dueño:{
        type: String,
        require: [true, 'La persona que los adopto debe ser escrita']
    }
});

module.exports = model('Pets', PetsSchema)