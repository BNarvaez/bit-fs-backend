import servidor from './server.js';

const puerto = 4100;


servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost: ${puerto}`);
});
