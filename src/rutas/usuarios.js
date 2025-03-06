import express from 'express';
import UsuarioController from '../controladores/usuarios.js';

const router = express.Router();

router.post('/', UsuarioController.crear);
router.get('/', UsuarioController.leertodos);
router.get('/:id', UsuarioController.leeruno);
router.put('/:id', UsuarioController.actualizar);
router.delete('/:id', UsuarioController.eliminar);

export default router;