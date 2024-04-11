import { useSelector } from "react-redux";
import HotelCard from "../components/HomePage/HotelCard";
import { useRef, useState } from "react";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
import '../components/styles/HomePage.css'


const HomePage = () => {

  const [ inputName, setInputName] = useState('')
const [fromTo, setFromTo ] = useState({
  from: 0,
  to: Infinity
})

  const hotels = useSelector((states) => states.hotels);

  const inputValue = useRef()

  const handleChange = () => {
    setInputName(inputValue.current.value)
  }

console.log(hotels)

const cbfilter = hotelInfo => {
  // filter by name
  const filterName = hotelInfo.name
    .toLowerCase()
    .includes(inputName.toLowerCase().trim())
    // filter by price
    const price = Number(hotelInfo.price)
    const filterPrice = price >= fromTo.from && price <= fromTo.to
  
    return filterName && filterPrice
}

  return (
    <div className="container-home-page">
      <div className="container-aside">
      <div className="search-input-container">
        <input
          className="search-input"
          onChange={handleChange}
          value={inputName}
          ref={inputValue}
          type="text"
          placeholder="Search by name..."
        />
      </div>
      <aside className="filters-container">
        <h3>Filters</h3>
        <PriceFilter 
        setFromTo={setFromTo}
        />
        <CategoryFilter />
      </aside>
      </div>
      <div className="container-card">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
