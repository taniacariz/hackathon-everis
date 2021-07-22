/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./booking.css";
import { FormContext } from "../../context/FormContext";
import GoForwardArrow from "../home/GoForwardArrow";
import ReturnArrow from "../home/Return-arrow";
import DinamicDiv from "./DinamicDiv";
import json from "../../Area.json";

const WorkSpace = ({ dispatch, data }) => {
  const { prev, next } = React.useContext(FormContext);
  const [selectedArea, setSelectedArea] = useState("0");
  console.log(selectedArea);

  const filterJson = json.Work.find(({ id }) => id === selectedArea);

  const changeState = (e) => setSelectedArea(e.currentTarget.value);

  const showDiv = () => {
    if (selectedArea === "0") {
      console.log("selecciona area");
    } else if (selectedArea !== "0") {
      return <DinamicDiv id={selectedArea} data={data} />;
    }
  };

  return (
    <div className="container">
      <div className="date-container">
        <div className="title-booking">Selecciona la zona de trabajo</div>
        <img
          className="container-plano"
          src="https://firebasestorage.googleapis.com/v0/b/reactivegirls.appspot.com/o/Plano.jpg?alt=media&token=f5bdf008-687c-4e20-9373-cf4cf1835f21"
          alt="Plano"
        />
        <div className="container-add">
          <select
            className="bnt-selecttwo"
            onChange={(e) => {
              changeState(e);
            }}
          >
            <option value="0"> areas</option>
            {json.Work.map(({ id, area }) => (
              <option key={id} value={id}>
                {area}
              </option>
            ))}
          </select>
          <button className="btn-add" onClick={() => dispatch(filterJson)}>
            Agregar
          </button>
        </div>
        {showDiv()}
      </div>
      <div className="order-arrow">
        <ReturnArrow action={prev} />
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default WorkSpace;
