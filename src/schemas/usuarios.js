import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true},
        telefono: { type: Number, required: true},
        ciudad: { type: String, required: true},
        direccion: { type: String, required: true},
        email: { type: String, required: true },
        usuario: { type: String, required: true },
        contraseña: { type: String, required: true }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Usuario", usuariosSchema);