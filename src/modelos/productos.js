import mongoose from 'mongoose';
import ProductosSchema from '../schemas/productos.js';


class ProductosModel {
   /*  constructor() {
        this.productos = mongoose.model('productos', productosSchema);
    }; */

    async create(producto){
        return await ProductosSchema.create(producto);
    }

    async getAll(){
        return await ProductosSchema.find();
    }

    async getOne(id){
        return await ProductosSchema.findById(id);
    }

    async update(id, producto){
        return await ProductosSchema.findByIdAndUpdate({_id: new mongoose.Type.ObjectId(id)}, producto);
    }

    async delete(id){
        return await ProductosSchema.findByIdAndDelete({_id: new mongoose.Type.ObjectId(id)});
    }
}

export default new ProductosModel();