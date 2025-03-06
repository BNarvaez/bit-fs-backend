import mongoose from "mongoose";
import UsuarioSchema from "../schemas/usuarios.js";


class UsuarioModel {

    async create(usuario){
        return await UsuarioSchema.create(usuario)
    }

    async getAll(){
        return await UsuarioSchema.find()
    }

    async getOne(id){
        return await UsuarioSchema.findById(id)
    }

    async update(id, usuario){
        return await UsuarioSchema.findByIdAndUpdate({_id: new mongoose.Type.ObjectId(id)})
    }

    async delete(id){
        return await UsuarioSchema.findByIdAndDelete({_id: new mongoose.Type.ObjectId(id)})
    }
}

export default new UsuarioModel();