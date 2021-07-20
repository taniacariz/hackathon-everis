import React, {useState} from 'react'
import {auth} from '../firebase'
import { withRouter } from 'react-router'

export const FormLogin = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState (null)
    const [register, setRegister] = useState(true)


    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()){
            //console.log('Ingrese Email')
            setError('Ingrese Email')
            return
        }
        e.preventDefault()
        if (!pass.trim()){
            //console.log('Ingrese Contraseña')
            setError('Ingrese Contraseña')
            return
        }
        if(pass.length < 6){
            //console.log('Se requiere una contraseña mayor a 6 carácteres')
            setError('Se requiere una contraseña mayor a 6 carácteres')
            return
        }
        console.log('Pasando todas las validaciones :D')
        setError(null)

        //Si register es true usamos registrar, si es false usamos login - Gise

        if(register){ 
            registrar()
        } else {
            login()
        }
    }

    const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            //props.history.push('/home')
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/user-not-found'){
                setError('Usuario no encontrado')
            }
            if(error.code === 'auth/wrong-password'){
                setError('Contraseña inválida')
            }
            if(error.code === 'auth/user-not-found'){
                setError('Usuario no encontrado')
            }
        }
    }, [email, pass])

    //useCallBack buscar - ver cómo puedo volverla una función normal - 

    const registrar = React.useCallback(async() => {

        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            setEmail('')
            setPass('')
            setError(null)
            //props.history.push('/home') - hook history
        } catch (error) {
            console.log(error)
            if(error.code === 'auth/invalid-email'){
                    setError('El correo no es válido')
            }
            if (error.code === 'auth/email-already-in-use'){
                    setError('El correo ya se encuentra en uso')
            }
        }
    }, [email, pass])

        return (
            <div className="mt-1">
            <h5 className="text-center">{
                
                register ? 'Registro de Usuarios' : 'Login de acceso'

            }</h5>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )
                        }
                        <input 
                            type="email" 
                            className="form-control mb-2" 
                            placeholder="Ingrese Email"
                            name= "email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2" 
                            placeholder="Ingrese Contraseña"
                            name= "pass"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                        />
                        <button className="btn btn-lg btn-dark btn-block" type="submit">
                            {
                                register ? 'Registrarse' : 'Acceder'
                            }
                        </button>
                        <button className="btn btn-md mb-5 btn-info btn-block" 
                        type="button"
                        onClick={() =>setRegister(!register)}
                        >
                        {
                            register ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'
                        }
                        </button>
                    </form>
                </div>
            </div>
        </div>
        );
    }

export default withRouter(FormLogin)