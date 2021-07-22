import logout from "../../images/log-out.png";
import { withRouter } from "react-router-dom";
import { auth } from "../../Firebase";

const SignOff = (props) => {
  

  const logOut = () => {
    auth.signOut().then(() => {
      console.log("Cerrando sesión");
      window.location.replace('/')
    });
  };

  return (
    <div type="button" className="cont-logout" onClick={logOut}>
      <small className="logoutTitle">Cerrar sesion</small>
      <img src={logout} alt="icono cierre" className="icono-logout" />
    </div>
  );
};

export default withRouter(SignOff);
