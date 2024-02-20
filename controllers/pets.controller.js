const bcryptjs = require('bcryptjs');
const Pets = require('../models/pets');

const petsGet = async (req, res = response) => {
    console.log("prueba");
    const {limite, desde} = req.query;
    const query = {};

    const [total, pets] = await Promise.all([   
        Pets.countDocuments(query),
        Pets.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({

        total,
        pets
    });
    
}

const getPetsById = async (req, res) => {
    const {id} = req.params;
    const pets = await Pets.findOne({_id: id});

    res.status(200).json({
        pets
    });
}

const putPets = async (req, res = response) =>{
    const { id } = req.params;
    const {_id, tipo, ...resto } = req.body;

    /*if(nombre){
        const salt = bcryptjs.genSaltSync();
        resto.nombre = bcryptjs.hashSync(nombre, salt);
    }*/

    const pets = await Pets.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'pets Actualizado Exitosamente!!!',
        pets
    });
}

const petsDelete = async (req, res) => {
    const {id} = req.params;
    const pets = await Pets.findByIdAndUpdate(id, {estado: false});
    res.status(200).json({
        msg: 'Pets eliminado',
        pets
    });
}




const petsPost = async (req, res) => {
    console.log("nombre");
    const {nombre, raza, tipo, dueño} = req.body;
    const pets = new Pets({nombre,raza,tipo,dueño});

    const salt = bcryptjs.genSaltSync();

    await pets.save();
    res.status(202).json({
        pets
    });
}


module.exports = {
    petsPost,
    petsGet,
    getPetsById,
    putPets,
    petsDelete
}