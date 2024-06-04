import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "./HotelCard"
import "../styles/HotelCard.css"
import "../../components/HomePage/shared/OtherHotels.css"


const OtherHotels = ({ hotel} ) => {

    const url = `https://hotel-app-backend-4mb6.onrender.com/hotels?cityId=${hotel?.cityId}`
    const [ hotelsInCity, getHotelsInCity] = useFetch(url)

    useEffect(() => {
        if (hotel) {
        getHotelsInCity()
        }
    }, [hotel])


  return (

    <section className="otherhotel-container">
        <h3>Other Hotels in  <span>{hotel?.city.name}</span></h3>
       <div  className="container-card">
        {
            hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
                <HotelCard
                key={hotelInfo.id}
                hotel={hotelInfo}
                />
            ))
        }
       </div>
    </section>
  )
}

export default OtherHotels