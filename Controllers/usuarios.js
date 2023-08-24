import express, { response } from 'express'

const usuariosGet = (req,res = response) => {
    const query = req.query; 
    // tambien puedo desestructuracion de datos
    // const {q,nombre = 'No name',apikey} = req.query
    res.json({
        msg : 'Get api - Controlador',
        query
    }); // se entrega un objeto
}

const usuariosPost = (req,res =response) => {
    const body = req.body; // viene con la info que lleva el usuario
    // tambien puedo hacer el parseo
    //const {nombre,apellido} = req.body
    res.status(201).json({
        msg : 'post api - controlador',
        body
    }); // se entrega un objeto
}

const usuariosPut = (req,res = response) => {
    //para agarra un dato que necesito para poder hacer un cambio
    const {id} =  req.params;
    res.status(404).json({
        msg : 'put api - controlador',
        id
    }); // se entrega un objeto
}

const usuariosDelete = (req,res = response) => {
    res.json({
        msg : 'delete api - controlador'
    }); // se entrega un objeto
}

const usuariosPatch = (req,res = response) => {
    res.json({
        msg : 'patch api - controlador'
    }); // se entrega un objeto
}

export {usuariosGet,usuariosPut,usuariosDelete,usuariosPatch,usuariosPost}