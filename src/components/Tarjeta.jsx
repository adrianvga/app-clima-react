
import '../styles/card.css'

export const Tarjeta = ({id,name,temp,humidity,feels_like,temp_max,temp_min,img,onClose}) => {

    let difKelvin = 273;

  return (
    <>
    <div className="card col-md-3">
      <div id='closeIcon' className='row'>
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button> 
      </div>
      <div className="card-body">
       <h2 className='card-title'><strong>{name}</strong></h2>
      <div className="row">
        <div className="col">
          <p><strong>Temperatura:</strong> {parseInt(temp - difKelvin)}°C </p>
          <p> <strong>Sensacion Termica:</strong> {parseInt(feels_like - difKelvin)}°C </p>
        </div>
        <div className="col">
          <p><strong>Humedad:</strong> {humidity}%</p>
          <p><strong>Temp Max:</strong> {parseInt(temp_max - difKelvin)}°C </p>
          <p><strong>Temp Min:</strong> {parseInt(temp_min - difKelvin)}°C </p>
        </div>
      </div>
      <div>
       <img className="iconoClima col" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
      </div>
      </div>
    </div>
    </>
  )
}
