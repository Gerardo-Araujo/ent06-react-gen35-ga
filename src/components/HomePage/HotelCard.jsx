import "../styles/HotelCard.css"
import { useNavigate } from 'react-router-dom'

const HotelCard = ({hotel}) => {

  const navigate =useNavigate()

  const handleClick= () => {
    navigate(`/hotels/${hotel.id}`)
  }
    
  return (
    
    <article className="card">
      <header>
        <img className="car__img" src={hotel?.images[0].url} alt="" />
      </header>
      <section className="card__items">
        <h3>{hotel.name}</h3>
        <p>{hotel.rating}</p>
        <span>{hotel.city.name}, {hotel.city.country}</span>
        <div>{hotel.price}</div>
      </section>
      <footer>
        <button onClick={handleClick}>See more ....</button>
      </footer>
    </article>
   
  )
}

export default HotelCard