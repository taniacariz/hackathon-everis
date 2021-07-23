import React from "react";
import { db } from "../Firebase.js";
import "../components/reserves/mybookings.css";

const AllBookings = () => {
  const [bookings, setBookings] = React.useState([]);

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
          <h1 className="misReservas">Todas las reservas:</h1>
          <table className="tabla" border="1px">
            <tr>
              <th>Fecha</th>
              <th>Colaborador</th>
              <th>Horario</th>
              <th>Cantidad</th>
              <th>Area</th>
            </tr>
            {bookings.map((item) => (
              <tr>
                <td> {item.date}</td>
                <td>{item.userName}</td>
                <td>{item.timeblock}</td>
                <td>{item.quantity}</td>
                <td>{item.area.area}</td>
              </tr>
            ))}
          </table>
        </div>
      </body>
    </React.Fragment>
  );
};
export default AllBookings;
