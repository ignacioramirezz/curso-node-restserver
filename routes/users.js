import { Router } from 'express';
import {usuariosDelete, usuariosGet, usuariosPatch, usuariosPost, usuariosPut}  from '../Controllers/usuarios.js'
const router = Router()

router.get('/',usuariosGet);
router.put('/:id',usuariosPut);
//esto se hace para obtener un dato desde la respuesta
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
router.patch('/',usuariosPatch);

export default router;