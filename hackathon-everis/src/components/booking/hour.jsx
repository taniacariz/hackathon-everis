import React from "react";
import "./booking.css";
import { FormContext } from "../../context/FormContext";
import GoForwardArrow from "../home/GoForwardArrow";
import ReturnArrow from "../home/Return-arrow";

const Hour = ({ dispatch, dispatch2 }) => {
  const { prev, next } = React.useContext(FormContext);
  const [blockHour, setBlockHour] = React.useState("block1");
  const [quantity, setQuantity] = React.useState("1");

  const onChangeValue = (event) => {
    setBlockHour(event.target.value);
  };
  const onChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="container">
      <div className="date-container">
        <div className="title-booking">Elige un bloque horario de trabajo</div>
        <div className="input-order" onChange={onChangeValue}>
        <input type="radio" id="block1" value="Bloque 1 (8:00 - 13:15 HRS)" name="hour" /> Bloque 1 (8:00 - 13:15 HRS)
        <input type="radio" id="block2" value="Bloque 2 (13:45 - 19:00 HRS)" name="hour" /> Bloque 2 (13:45 - 19:00 HRS)
        </div>
        <button className="btn-addhour" onClick={() => dispatch(blockHour)}>Agregar hora</button>
        <div>
          <select className="bnt-select" onChange={onChangeQuantity}>
            <option value="0">Selecciona la cantidad de personas</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <button className="btn-addhour" onClick={() => dispatch2(quantity)}>Agregar cantidad</button>
      </div>
      <div className="order-arrow">
        <ReturnArrow action={prev} />
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default Hour;
