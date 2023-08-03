import { useState } from "react";

export const SearchBar = ({fetchClima}) => {

    const [ciudad, setCiudad] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ciudad.length > 0){
            fetchClima(ciudad);
        }
        setCiudad('');
    }

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
        e.preventDefault;
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <input
            className="inputSearch"
            type="text"
            value={ciudad}
            onChange={handleCambioCiudad}
            />
            <button type='submit'>Buscar</button>
        </form>
    </div>
  )
}
