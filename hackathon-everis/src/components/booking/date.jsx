import React from "react";

const Date = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => dispatch("2021-07-20")}>Agrego Fecha</button>
      estas en fecha
    </div>
  );
};

export default Date;
