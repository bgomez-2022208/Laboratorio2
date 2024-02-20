const Role = require('../models/role');
const Usuario = require("../models/usuario");

const esRoleValido = async (role = "") => {
     const existeRol = await Role.findOne({role});
     if(!existeRol){
        throw new Error (`El role ${role} no existe en la base de datos`);
     }
}


const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error (`El correo ${ correo } no existe en la base de datos`);
     }
}

const existeUsuarioByID = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error (`El usuario con el id: ${ id } no existe`);
     }
}

const existePetsByID = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error (`El usuario con el id: ${ id } no existe`);
     }
}

const esTipo = async (tipo = "") => {
    const esTipo = await tipo.findOne({tipo});
    if(!esTipo){
       throw new Error (`El role ${tipo} no existe en la base de datos`);
    }
}

module.exports ={
    esRoleValido,
    existenteEmail,
    existeUsuarioByID,
    esTipo,
    existePetsByID
}