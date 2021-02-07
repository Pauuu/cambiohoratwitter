var Twitter = require('twitter');
require("dotenv/config");
const date = new Date();

const apikey = process.env.apikey;
const apiSecretkey = process.env.apisecretkey;
const accessToken = process.env.accesstoken;
const accessTokenSecret = process.env.accesstokensecret;

var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiSecretkey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});

// Ejecuta la function 10 segundos antes del minuto exacto, luego lo ejecuta cada 1min a partir del minuto exacto
setTimeout(() => {
  setInterval(() => cambiarNombre(), 60000);
  cambiarNombre();
}, (70 - date.getSeconds()) * 1000);


// cambia el nombre de mi usuario de tw
function cambiarNombre() {
  const date = new Date();

  const hora = `${addZero(date.getHours())}:${addZero(date.getMinutes())}`
  const nombre = { name: `Mopi, son las ${hora}`};

  client.post('account/update_profile', nombre, function (error, tweet, response) {
    if (error) throw error;
    console.log(nombre);
  });
}

// añade un 0 si es menor que 10
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}