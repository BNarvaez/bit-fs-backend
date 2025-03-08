import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
{
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    /* codigo: { type: String, required: true, max: 100 }, */
    foto: { type: String, required: true },
    stock: { type: Number, required: true },
    precioPromo: { type: Number, required: true },
    categoria: { 
        type: String, 
        required: true, 
        enum: ['medicamentos', 'belleza', 'suplementos'], 
        default: 'medicamentos' 
    }
},
{ timestamps: true, versionKey: false }
);

export default mongoose.model('products', productsSchema);