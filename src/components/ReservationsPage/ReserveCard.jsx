import "../../components/ReservationsPage/FormReviews.css"

const ReserveCard = ({reserve, setReserveSelected, deleteBooking}) => {

  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)
  const reservetionsdays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)
 
  const handleReview = () => {
    const obj = {
      ...reserve, 
      reservetionsdays,
      subtotal: reserve.hotel.price * reservetionsdays
    }
    setReserveSelected(obj)

  }

  const handleDeleteBooking = () => {
    const url = `https://hotel-app-backend-4mb6.onrender.com/bookings/${reserve.id}`
    deleteBooking(url, reserve.id)
  }
  return (
    <article className="container-reserve-card">
    <header>
      <img src={reserve.hotel.images[0].url} alt="" />
    </header>
    <section>
      <h3>{reserve.hotel.name}</h3>
      <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
      <div onClick={handleReview}>Rate and comment this visit...</div>
    </section>
    <section>
      <ul>
        <li><span>Reservation Days</span><span>{reservetionsdays}</span></li>
        <li><span>subtotal Price</span><span>{reserve.hotel.price * reservetionsdays} USD</span></li>
      </ul>
    </section>
    <footer>
      <button onClick={handleDeleteBooking}>ELIMINAR
        <i   className='bx bx-trash'></i>
      </button>
    </footer>
  </article>
  )
}

export default ReserveCard