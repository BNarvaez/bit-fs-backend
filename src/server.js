import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rutasProductos from './rutas/productos.js';

const servidor = express();

servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));
servidor.use(cors())
servidor.use("/productos", rutasProductos);

servidor.get('/', (req, res) => {
  res.json({ mensaje: 'Hola mundo', data: null });
});

export default servidor;