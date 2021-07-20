import "./login.css"
import React from 'react'

export const BodyLogin = () => {
    return (
             <div className="container-body">
            <div className="container-img"></div>
            <div className="container-form">
                <form>
                <h2 className="text-form">Iniciar sesión</h2>
                    <input  
                    type="text"
                    className="form-placeholder"  
                    name="name" 
                    placeholder="Ingresa tu correo Everis"
                    />
                    <input 
                    type="text" 
                    className="form-placeholder" 
                    name="password" 
                    placeholder="Ingresa tu contraseña"/>

                <div className="text-form">¿Olvidaste tu contraseña?</div>

                <input className="btn-submit" type="submit" value="INGRESAR" />
                </form>
            </div>
        </div>
    )
}
