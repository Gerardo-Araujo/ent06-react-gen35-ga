/**   @format  */

import { useState } from "react"
import "../styles/LoginPage.css"


const UserLogged = ({ user , setUser }) => {


    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser()
    }





  return (
    <article className="contenedor-logged">
        <header>
            <img src={
                user.gender === 'female'
                ? '/user-female-icon.jpg'
                : '/user-male-icon.jpg'} alt=""
                />
        </header>
        <h2>
            {user.firstName} { user.lastName}
        </h2>

                <button onClick={handleLogout}>Logout</button>              
                
    </article>
    )
}

export default UserLogged