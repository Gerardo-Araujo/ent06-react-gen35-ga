
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import { Map, Overlay } from "pigeon-maps"
import OtherHotels from "../components/HomePage/OtherHotels"
import { Link, useParams } from "react-router-dom"
import FormReserve from "../components/HotelIdPage/FormReserve"
import '../components/styles/HotelsIdPage.css'

const HotelsIdPage = () => {

  const {id} = useParams()

  const url=`https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel , getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])



  return (
<div className="hotel-detail-container">
      <div className="hotel-info">
        <h2>{hotel?.name}</h2>
        <h3>RATING - {hotel?.rating}</h3>
        <div className="image-slider">
          <img src={hotel?.images[0].url} alt={hotel?.name} />
          {hotel && (
            <Map
              height={200}
              defaultCenter={[+hotel?.lat, +hotel?.lon]}
              Zoom={15}
              maxZoom={16}
              minZoom={10}
            >
              <Overlay anchor={[+hotel?.lat, +hotel?.lon]} offset={[20, 20]}>
                <img src="/hotel-icon.png" width={40} alt="Hotel icon" />
              </Overlay>
            </Map>
          )}
        </div>
        <section className="hotel-location">
          <h3>{hotel?.city.name}, {hotel?.city.country}</h3>
          <p>
            <i className="bx bx-map"></i>
            <span>{hotel?.address}</span>
          </p>
          <p>{hotel?.description}</p>
        </section>
        {localStorage.getItem("token") ? (
          <FormReserve hotelId={hotel?.id} />
        ) : (
          <span>
            If you want to make a reservation, please.{" "}
            <Link to={"/login"}>login</Link>{" "}
          </span>
        )}
      </div>
      <OtherHotels  hotel={hotel} />
    </div>
  )
}

export default HotelsIdPage

