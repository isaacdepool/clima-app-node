const axios = require('axios');

const getLugarLatLng = async ( direccion ) =>{

    const encodeUrl = encodeURI(direccion);
        
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeUrl}`,
        headers: {'x-rapidapi-key': '00de46af28msh7b7d24c41efb884p18efc7jsn5e478ddfee16'}
      });
    
      const resp = await instance.get();

      if( resp.data.length === 0 ){
          throw new Error(`No hay resultados para ${direccion}`);
      }

      const data = resp.data;
      
      const lugar = data.name;
      const lat = data.coord.lat;
      const lng = data.coord.lon;

      return{
          lugar,
          lat,
          lng
      }

}

module.exports = {

    getLugarLatLng
}
