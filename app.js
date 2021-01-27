const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async (direccion) =>{

   try {
       const info =  await lugar.getLugarLatLng(direccion);
    
       const infoC = await clima.getClima(info.lat, info.lng);
       
       return `El clima de ${direccion} es de ${infoC}.`
   } catch (error) {
       
       return `No se puedo determinar el clima de ${direccion}`
   }      

}

getInfo( argv.direccion )
    .then(console.log)
    .catch(console.log);
