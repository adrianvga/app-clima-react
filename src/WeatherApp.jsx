import { useState } from "react"
import { SearchBar } from "./components/SearchBar"
import {Tarjetas} from "./components/Tarjetas"


export const WeatherApp = () => {
    const [dataClima, setdataClima] = useState(null)
    const [cities, setCities] = useState([]);

    let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    let api_key = '06df1b179d14056bcdb7fa752aa6975f';

    const fetchClima = async (ciudad) => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`);
            const data = await response.json();
            setdataClima(data);
            setCities(oldCities => [...oldCities,data]);
        }catch(error){
            console.error('Error: ',error);
        }
    } 

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }
    
  return (
    <div className='container'>
        <h1>Aplicacion del clima</h1>
        <SearchBar
          fetchClima = {fetchClima}
        />
        <Tarjetas
          dataClima = {dataClima}
          cities = {cities}
          onClose={onClose}
        />
    </div>
  )
}
