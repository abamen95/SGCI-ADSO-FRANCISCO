const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Nuevos pedidos
router.post('/nuevo', pedidosController.nuevoPedido);

// Muestra todos los pedidos
router.get('/', pedidosController.mostrarPedidos);

// Muestra un pedido por su ID
router.get('/:idPedido', pedidosController.mostrarPedido);

// Actualizar pedidos
router.put('/:idPedido', pedidosController.actualizarPedido);

// Elimina un pedido
router.delete('/:idPedido', pedidosController.eliminarPedido);

module.exports = router;
