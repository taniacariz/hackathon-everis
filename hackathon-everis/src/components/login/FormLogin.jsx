import "./login.css";
import React from "react";
import { auth } from "../../Firebase.js";
import { withRouter } from "react-router-dom";

const FormLogin = (props) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);

  const [esRegistro, setEsRegistro] = React.useState(false);

  const procesarDatos = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      console.log("Ingrese Email");
      setError("Ingrese Email");
      return;
    }
    if (!pass.trim()) {
      console.log("Ingrese Password");
      setError("Ingrese Password");
      return;
    }
    if (pass.length < 6) {
      console.log("Password mayor a 6 carácteres");
      setError("Password mayor a 6 carácteres");
      return;
    }

    console.log("Pasando todas las validaciones :D");
    setError(null);

    if (esRegistro) {
      register();
    } else {
      login();
    }
  };

  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass);
      console.log(res.user);
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/home/bookings");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña Inválida");
      }
    }
  }, [email, pass, props.history]);

  const register = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/home/bookings");
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya registrado");
      }
    }
  }, [email, pass, props.history]);

  return (
    <div className="container-elements">
      <h3 className="text-center">
        {esRegistro ? "Registro de Usuario" : "Iniciar Sesión"}
      </h3>
      <form onSubmit={procesarDatos} className="container-form">
        {error && <div class="alert">{error}</div>}

        <input
          type="email"
          className="form-control"
          placeholder="Ingrese tu correo Everis"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese su contraseña"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />

        <div className="pass">¿Olvidaste tu contraseña?</div>

        <button className="btn-login" type="submit">
          {esRegistro ? "Registrarse" : "INGRESAR"}
        </button>
        <button
          className="btn-logintwo"
          onClick={() => setEsRegistro(!esRegistro)}
          type="button"
        >
          {esRegistro ? "¿Ya estás registrado?" : "¿No tienes cuenta?"}
        </button>
      </form>
    </div>
  );
};

export default withRouter(FormLogin);
