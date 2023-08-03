import {Tarjeta} from './Tarjeta'

import '../styles/cards.css'

export const Tarjetas = ({cities, onClose}) => {

  return (
    <div className="container">

      <div className="row">
          {cities.map(c => <Tarjeta
              key={c.id}
              name={c.name}
              temp={c.main.temp}
              feels_like={c.main.feels_like}
              humidity={c.main.humidity}
              temp_max={c.main.temp_max}
              temp_min= {c.main.temp_min}
              img={c.weather[0].icon}
              onClose={() => onClose(c.id)}
            />)} 
      </div>
    </div>
  )
}
