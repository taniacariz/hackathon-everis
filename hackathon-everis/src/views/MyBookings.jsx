import React from "react";
import { db } from "../Firebase.js";
import "../components/reserves/mybookings.css";

const MyBookings = () => {
  const {displayName} = JSON.parse(localStorage.getItem("user") || "{}")
  const [bookings, setBookings] = React.useState([]);
  
  const filterByName = bookings.filter((booking) => booking.userName === displayName)


  React.useEffect(() => {
    const bringData = async () => {
      try {
        const data = await db.collection("bookings").orderBy("date").get();
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
    <React.Fragment>
      <body className="cuerpo">
        <div className="reservas">
          <h1 className="misReservas">Tus reservas:</h1>
          <table className="tabla" border="1px">
            <tr>
              <th>Fecha</th>
              <th>Horario</th>
              <th>Cantidad</th>
              <th>Area</th>
              <th>Cancelar</th>
            </tr>
            {filterByName.map((item) => (
              <tr>
                <td> {item.date}</td>
                <td>{item.timeblock}</td>
                <td>{item.quantity}</td>
                <td>{item.area.area}</td>
                <td></td>
              </tr>
            ))}
          </table>
        </div>
      </body>
    </React.Fragment>
  );
};

export default MyBookings;
