import { withRouter } from "react-router-dom";
import { auth } from "../../Firebase";

const SignOff = (props) => {
  const logOut = () => {
    auth.signOut().then(() => {
      console.log("Cerrando sesión");
      window.location.replace("/");
    });
  };

  return (
    <div className="btn-group">
      <button className="btn-navbar" onClick={logOut}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default withRouter(SignOff);
