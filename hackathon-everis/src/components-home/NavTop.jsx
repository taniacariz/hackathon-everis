import "./home.css"
import date from '../images/date.png';
import hour from '../images/hour.png';
import quantity from '../images/quantity.png';
import workSpace from '../images/work-space.png';
import confirm from '../images/confirm.png';

const NavTop = () => {

  const changeView = () =>{
    console.log ("diste click")
  }

  return ( 
    <nav className="container-nav-top">
      <div className="each-bttn-nav-top" onClick={changeView}>
        <img src={date} alt="Fecha" className="nav-icon"/>
        <span className="nav-subtitle">Fecha</span>
      </div>
      <div className="each-bttn-nav-top" onClick={changeView}>
        <img src={hour} alt="Hora" className="nav-icon"/>
        <span className="nav-subtitle">Horario</span>
      </div>
      <div className="each-bttn-nav-top" onClick={changeView}>
        <img src={quantity} alt="Cantidad de personas" className="nav-icon"/>
        <span className="nav-subtitle">Cantidad</span>
      </div>
      <div className="each-bttn-nav-top" onClick={changeView}>
        <img src={workSpace} alt="Espacio de trabajo" className="nav-icon"/>
        <span className="nav-subtitle">Espacio de trabajo</span>
      </div>
      <div className="each-bttn-nav-top" onClick={changeView}>
        <img src={confirm} alt="confirmar" className="nav-icon"/>
        <span className="nav-subtitle">Confirmación</span>
      </div>
    </nav>
  );
}

export default NavTop;