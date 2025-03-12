import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
{
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    foto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    categoria: { 
        type: String, 
        required: true, 
        enum: ['Medicamentos', 'Belleza', 'Suplementos'], 
        default: 'Medicamentos' 
    }
},
{ timestamps: true, versionKey: false }
);

export default mongoose.model('products', productsSchema);