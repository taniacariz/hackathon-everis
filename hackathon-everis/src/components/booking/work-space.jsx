/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./booking.css";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";
import json from "../../Area.json";
import { db } from "../../Firebase.js";


const WorkSpace = ({ dispatch }) => {
  const { prev, next } = React.useContext(FormContext);
  const [selectedArea, setSelectedArea] = useState("1");
  const [dinamicDiv, setDinamicDiv] = useState(null)
  const [bookings, setBookings] = React.useState([]);

  console.log(bookings);

  const filterJson = json.Work.find(({ id }) => id === selectedArea)


  const changeState = (e) =>(
    setSelectedArea(e.currentTarget.value)
  )

  const showDiv = (e) => {

    const filterJson2 = json.Work.find(({ id }) => id === e.currentTarget.value);
    // const availability =  bookings.filter ((element) => element.area.id === filterJson.id );
    // console.log (availability)
    console.log (filterJson2)
    
    setDinamicDiv(
    <div>
      <span>Area {filterJson2.area}</span>
      <span>Espacios totales en el area {filterJson2.space}</span>
      <span>Espacios disponibles</span>

    </div>
    )
  }

  React.useEffect(() => {
    const bringData = async () => {
      try {
        const data = await db.collection("bookings").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBookings(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    bringData();

    
  }, []);

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
          <button className="btn-add" onClick={() => dispatch(filterJson)}>Agregar</button>
          <select
            className="bnt-selecttwo"
            onChange={(e) => {changeState(e); showDiv(e); }}
          >
            {json.Work.map(({ id, area }) => (
              <option key={id} value={id}>
                {area}
              </option>
            ))}
          </select>
        </div>
        {dinamicDiv}
      </div>
      <div className="order-arrow">
        <ReturnArrow action={prev} />
        <GoForwardArrow action={next} />
      </div>
    </div>
  );
};

export default WorkSpace;
