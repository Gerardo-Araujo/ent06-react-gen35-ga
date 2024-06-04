import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import "../components/styles/ReservationsPage.css"

const ReservationsPage = () => {

    const [ reserveSelected, setReserveSelected] = useState()

    const [bookings, getBookings ,, deleteBooking] = useCrud() 

        useEffect(() => {
            const url = 'https://hotel-app-backend-4mb6.onrender.com/bookings'
            getBookings(url)
        }, [])

    


  return (
    <div className="container-reservationspages">
        <FormReviews
        reserveSelected = {reserveSelected}
        setReserveSelected = {setReserveSelected}
        
        />
    <h2>Reservations</h2>
    
    <div className="reservation-list">
        {
            bookings?.map(reserve => (
                <ReserveCard 
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                deleteBooking = {deleteBooking}
                />
            ))
        }
    </div>
    </div>
  )
}

export default ReservationsPage