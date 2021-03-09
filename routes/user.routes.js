
const { Router } = require('express');
const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPatch, 
    usuariosPut, 
    usuariosDelete 
} = require('../controllers/user.controller');

const router = Router();

        // ENDPOINT
        router.get('/', usuariosGet ); // En este caso solo se estámos mandando la referencia a la función, NO se está ejecutando. Por lo que cuando se llame esta solicitud el req y el res serán pasados en el usuarioGet 
        
        router.post('/', usuariosPost );
        
        router.patch('/', usuariosPatch );
        
        router.put('/:id', usuariosPut ); // :id ya está configurado en express, el cual lo parsea y lo entrega en la propiedad params del objeto request 

        router.delete('/', usuariosDelete );






module.exports = router;