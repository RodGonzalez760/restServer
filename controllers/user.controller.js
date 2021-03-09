const { response } = require('express'); // No es necesario pero nos ayuda en el autocompletado del codigo

const usuariosGet =  (req, res) => {

    const { q, nombre = 'Sin Nombre', apikey, page=1, limit=10} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controlador',
        // body    // lo que sea que venga en el body, lo voy a reflejar en la respuesta 
        nombre,
        edad

    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador'
    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    })
}

module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete

}