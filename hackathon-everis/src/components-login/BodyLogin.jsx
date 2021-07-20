import React from 'react'

export const BodyLogin = () => {
    return (
             <div className="container-body">
            <div className="container-img"></div>
            <div className="container-form">
                <form>
                <h2 className="text-form">Iniciar sesión</h2>
                <label>
                    <input className="form-placeholder" type="text" name="name" placeholder="Ingresa tu correo Everis"/>
                    <input className="form-placeholder" type="text" name="password" placeholder="Ingresa tu contraseña"/>
                </label>
                <div className="text-form">¿Olvidaste tu contraseña?</div>
                    <input className="btn-submit" type="submit" value="INGRESAR" />
                </form>
            </div>
        </div>
    )
}
