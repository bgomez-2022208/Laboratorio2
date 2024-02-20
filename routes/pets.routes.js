const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');


const {petsPost, getPetsById, petsGet, petsDelete, putPets } = require('../controllers/pets.controller');
const { existePetsByID } = require('../hellpers/db-validators');

const router = Router();

router.get("/", petsGet);

router.get(
    "/:id",
    [
        check(`id`,` No es un id valido`).isMongoId(),
        check('id').custom(existePetsByID),
        validarCampos
    ], getPetsById);


    router.put(
        "/:id",
        [
            check(`id`,` No es un id valido`).isMongoId(),
            check('id').custom(existePetsByID),
            validarCampos
    
        ], putPets);
    

router.post(
    "/",
    [
    check("nombre", "el nombre de la mascota no debe estar vacio").not().isEmpty(),
    check("raza", "La raza de la mascota no debe estar vacio ").not().isEmpty(),
    check("tipo", "El tipo de perro no debe estar vacio").not().isEmpty(),
    check("dueño", "La persona que lo adopto debe dejar su nombre").not().isEmpty(),

    validarCampos,
    ], petsPost);


router.delete(
    "/:id",
    [
        check(`id`,` No es un id valido`).isMongoId(),
        check(`id`).custom(existePetsByID),
        validarCampos
    ], petsDelete);

    module.exports = router;
    
