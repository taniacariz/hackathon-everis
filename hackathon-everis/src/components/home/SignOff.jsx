import logout from "../../images/log-out.png";
const SignOff = () => {
  const logOut = () => {
    console.log("diste click en salir");
  };
  return (
    <div type="button" className="cont-logout" onClick={logOut}>
      <small>Cerrar sesion</small>
      <img src={logout} alt="icono cierre" className="icono-logout" />
    </div>
  );
};

export default SignOff;
