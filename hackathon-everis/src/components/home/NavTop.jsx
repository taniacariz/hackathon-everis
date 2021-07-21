import React, { useContext } from "react";
import "./home.css";
import date from "../../images/date.png";
import hour from "../../images/hour.png";
import quantity from "../../images/quantity.png";
import workSpace from "../../images/work-space.png";
import confirm from "../../images/confirm.png";
import { FormContext } from "../../context/form-context";

const NavTop = () => {
  const { changeStep } = useContext(FormContext);

  const changeView = (e) => {
    const number = Number(e.currentTarget.id);
    changeStep(number);
  };

  return (
    <nav className="container-nav-top">
      <div className="each-bttn-nav-top" id="1" onClick={changeView}>
        <img src={date} alt="Fecha" className="nav-icon" />
        <span className="nav-subtitle">Fecha</span>
      </div>
      <div className="each-bttn-nav-top" id="2" onClick={changeView}>
        <img src={hour} alt="Hora" className="nav-icon" />
        <span className="nav-subtitle">Horario</span>
      </div>
      <div className="each-bttn-nav-top" id="2" onClick={changeView}>
        <img src={quantity} alt="Cantidad de personas" className="nav-icon" />
        <span className="nav-subtitle">Cantidad</span>
      </div>
      <div className="each-bttn-nav-top" id="3" onClick={changeView}>
        <img src={workSpace} alt="Zona laboral" className="nav-icon" />
        <span className="nav-subtitle">Zona Laboral</span>
      </div>
      <div className="each-bttn-nav-top" id="4" onClick={changeView}>
        <img src={confirm} alt="confirmar" className="nav-icon" />
        <span className="nav-subtitle">Confirmación</span>
      </div>
    </nav>
  );
};

export default NavTop;
