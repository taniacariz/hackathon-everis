import React from "react";
import "../components/reserves/mybookings.css"

const AllBookings = () => {
  return (
    <React.Fragment>
      <body className="cuerpo">
        <div className="reservas">
          En esta sección encontrarás todas las reservas relizadas en SMM
          <h1 className="misReservas">Todas las reservas:</h1>
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
export default AllBookings;
