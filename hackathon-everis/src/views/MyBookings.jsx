import React from "react";
import "../components/reserves/mybookings.css";

const MyBookings = () => {
  return (
    <React.Fragment>
      <body className="cuerpo">
        <div className="reservas">
          <h1 className="misReservas">Tus reservas:</h1>
          <table className="tabla" border="1px">
            <tr>
              <th>Fecha</th> <th>Horario</th> <th>Cantidad</th> <th>Area</th>
              <th>Cancelar</th>
            </tr>
            <tr>
              <td>A</td> <td>B</td> <td>C</td> <td>D</td> <td>🗑️</td>
            </tr>
            <tr>
              <td>A</td> <td>B</td> <td>C</td> <td>D</td> <td>🗑️</td>
            </tr>
          </table>
        </div>
      </body>
    </React.Fragment>
  );
};

export default MyBookings;
