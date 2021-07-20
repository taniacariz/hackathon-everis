import React from 'react'
import "./login.css"
import logo_everis from '../images/logo_everis.png' 


export const HeaderLogin = () => {
    return (
        <div>
             <div className="container-header">
                <div className="container-btn">
                <button className="btn-header text">Iniciar Sesión |</button>
                <button className="btn-header text">Registrarse</button>
                </div>
                <div className="container-btn">
                <div className="header-text">Space Management Model</div>
                <img src={logo_everis} alt="Everis Logo" width="190px" height="94px"/> 
                </div>
            </div>
        </div>
    )
}
