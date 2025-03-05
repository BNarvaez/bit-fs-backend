import mongoose from "mongoose";

class ConexionDb {
    constructor(){
        this.conexion();
    }

    async conexion() {
        try {
            const stringDeConexion = process.env.MONGODB_ATLAS; 

            await mongoose.connect(stringDeConexion)
            serverSelectionTimeoutMS: 5000;
            console.log('Conexión a la base de datos establecida');
        } catch (error) {
            console.log('Error al conectar a la base de datos', error);
        }
    }
}

export default new ConexionDb();