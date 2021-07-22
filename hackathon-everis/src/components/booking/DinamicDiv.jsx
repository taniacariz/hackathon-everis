import React from "react";
import json from "../../Area.json";
import { db } from "../../Firebase.js";

const DinamicDiv = (props) => {
  const [bookings, setBookings] = React.useState([]);

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

  // importando y filtrando la informacion de la sala segun el ID
  const filterJson2 = json.Work.find(({ id }) => id === props.id);
  
  // Filtrando la base de datos de firebase segun el ID de la sala
  const filterByID = bookings.filter((booking) => booking.area.id === props.id);
  // Filtrando por fecha
  const filterByDate = filterByID.filter((booking) => booking.date === props.data.date);
  // Filtrando por bloque horario
  const filterByHour = filterByDate.filter(
    (booking) => booking.timeblock === props.data.timeblock
  );
  const arrayQuantity = []
  const availability = filterByHour.map((booking) => arrayQuantity.push(Number(booking.quantity)));

  const sum = arrayQuantity.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  }, 0);
  const totalAvailability = Number(filterJson2.space) - sum;

  

  return (
    <div className="dinamicDiv">
      <div className="dinamicDivChild">
        <span>Area:</span>{" "}<span className="subtitleDiv">{filterJson2.area}</span>
      </div>
      <div className="dinamicDivChild">
        <span>Espacios totales en el area:</span>{" "}<span className="subtitleDiv">{filterJson2.space}</span>
      </div>
      <div className="dinamicDivChild">
        <span>Espacios disponibles:</span>{" "}<span className="subtitleDiv">{totalAvailability}</span>
      </div>
    </div>
  );
};

export default DinamicDiv;
