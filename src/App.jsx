import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HotelsIdPage from "./pages/HotelsIdPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { getHotelsThunk } from "./store/states/hotels.slice";
import RegisterPage from "./pages/RegisterPage";
import { useDispatch } from "react-redux";
import PrincipalHeader from "./components/HomePage/shared/PrincipalHeader";
import ReservationsPage from "./pages/ReservationsPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {

  const  dispatch = useDispatch()

  useEffect(() => {
    // const url = "11https://hotels-api.academlo.tech/hotels";
    const url = "https://hotel-app-backend-4mb6.onrender.com/hotels";
    dispatch(getHotelsThunk(url));
  }, []);

  return (
    <div>
      <PrincipalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelsIdPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />} >
           <Route path="/reservations" element={<ReservationsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
