class ProductosController {
    constructor() {
    };
    
    async crear(solicitud, respuesta){
        respuesta.json({mensaje: "Crear un producto", data: null});
    }

    async leerTodos(solicitud, respuesta){
        respuesta.json({mensaje: "Leer todos los productos", data: null});
    }

    async leerUno(solicitud, respuesta){
        respuesta.json({mensaje: "Leer un producto", data: null});
    }

    async actualizar(solicitud, respuesta){
        respuesta.json({mensaje: "Actualizar un producto", data: null});
    }
    
    async eliminar(solicitud, respuesta){
        respuesta.json({mensaje: "Eliminar un producto", data: null});
    }
}


export default new ProductosController();