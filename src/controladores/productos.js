import ProductosModel from '../modelos/productos.js';

class ProductosController {
    constructor() {
    };
    
    async crear(solicitud, respuesta){
        try {
            const resultado = await ProductosModel.create(solicitud.body);
            respuesta.json({mensaje: "Producto creado", data: resultado});
        } catch (error) {
            respuesta.json({mensaje: "Error al crear el producto", data: error});
        }
    }

    async leerTodos(solicitud, respuesta){
        try {
            const resultado = await ProductosModel.getAll();
            const arreglo = []
            for (const producto of resultado) {
                const {_id, nombre, precio, foto, descripcion, categoria, stock} = producto;
                arreglo.push({_id, nombre, precio, foto, descripcion, categoria, stock});
            }
            respuesta.json({
                mensaje: 'Se obtuvieron todos los productos',
                data: arreglo
            })
        } catch (error) {
            respuesta.json({mensaje: "Ocurrió un error al obtener todos los productos",
            data: error});
        }
    }

    async leerUno(solicitud, respuesta){
        try {
            const resultado = await ProductosModel.getOne(solicitud.params.id);
            respuesta.json({
                mensaje: 'Se obtuvo el producto',
                data: resultado,
            })
        } catch (error) {
            respuesta.json({
                mensaje: "No se encontró el producto con el id: " + solicitud.params.id, 
                data: error});
        }
    }

    async actualizar(solicitud, respuesta){
        try {
            console.log('id: ', solicitud.params.id);
            console.log('body: ', solicitud.body);
            const resultado = await ProductosModel.update(
                solicitud.params.id,
                solicitud.body,
            )
            respuesta.json({
                mensaje: "Producto actualizado", 
                data: resultado,
            });
        } catch (error) {
            respuesta.json({
                mensaje: "Ocurrió un error al actualizar el producto", 
                data: error
            });
        }
    }
    
    async eliminar(solicitud, respuesta){
        try {
            await ProductosModel.delete(solicitud.params.id)
            respuesta.json({
                mensaje: "Producto eliminado", 
                data: null
            });
        } catch (error) {
            respuesta.json({
                mensaje: "Ocurrió un error al eliminar el producto", 
                data: error
            });
        }
    }
}


export default new ProductosController();