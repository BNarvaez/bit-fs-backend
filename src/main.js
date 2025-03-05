import 'dotenv/config';
import ConexionDb from './conexiones/db.js';
import servidor from './server.js';

const puerto = process.env.PORT || 8080;

let mensaje = '';

try {
  servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost: ${puerto}`);
    console.log(mensaje)
  });
} catch (error) {
  mensaje = `Error al iniciar el servidor: ${error}`;
  console.log(mensaje);
} finally {
  console.log('Esto se ejecuta siempre');
}
