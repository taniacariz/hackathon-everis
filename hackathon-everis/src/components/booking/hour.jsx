import React from "react";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";

const Hour = ({ dispatch, dispatch2 }) => {
  const { prev, next } = React.useContext(FormContext);
  const [blockHour, setBlockHour] = React.useState("block1");
  const [quantity, setQuantity] = React.useState('1')
  console.log(blockHour);
  console.log (quantity)
  const onChangeValue = (event) => {
    setBlockHour(event.target.value);
    console.log(event.target.value)
  };
  const onChangeQuantity = (event) =>{
    setQuantity(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <div onChange={onChangeValue}>
        <input type="radio" id="block1" value="block1" name="hour" /> Bloque 1(8:00 - 13:15 HRS)
        <input type="radio" id="block2" value="block2" name="hour" /> Bloque 2(13:45 - 19:00 HRS)
      </div>
      <button onClick={() => dispatch(blockHour)}>Agrego Hora</button>
      <div>
        <select onChange={onChangeQuantity} >
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
      <button onClick={() => dispatch2(quantity)}>Agrego Cantidad</button>

      <ReturnArrow action={prev} />
      <GoForwardArrow action={next} />
    </div>
  );
};

export default Hour;
