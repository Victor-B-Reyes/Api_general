const express = require ('express');
const WebSocket = require('ws');
let Temperatura_0, Humedad_0;
let fechaActual, hora, minuto, segundo;
let contador = 0;


const app = express();
const ws = new WebSocket('ws://127.0.0.1:1880/ws/test');

ws.on('open', function open() {
    console.log('Conectado al servidor WebSocket');
  });
  
ws.on('message', function incoming(bufferData) {
    const cadena = bufferData.toString('utf8');
    const jsonData = JSON.parse(cadena);
    Temperatura_0 = jsonData.Temperatura_0;
    Humedad_0 = jsonData.Humedad_0;
    fechaActual = new Date();
    hora = fechaActual.getHours();
    minuto = fechaActual.getMinutes();
    segundo = fechaActual.getSeconds();
    if(segundo == contador){
        tiempo();
        contador = contador + 10;
        if(contador == 60){
            contador = 0;
        }
        return contador;
    }
    //console.log("La hora es " + hora + ":" +minuto+ ":" +segundo+ ", Los valores recibidos son Temperatura_0: " +Temperatura_0+ ", Humedad_0: " + Humedad_0 +", Contador: "+ contador);

});

function tiempo(){
    console.log("Envio de datos, Hora: " + hora + ":" +minuto+ ":" +segundo+ ", Los valores recibidos son Temperatura_0: " +Temperatura_0+ ", Humedad_0: " + Humedad_0 );
}


const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO, () => {
    console.log(`Server sobre http://localhost:${PUERTO}...`)
});