/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FormContext } from "../../context/form-context";
import GoForwardArrow from "../home/Go-foward-arrow";
import ReturnArrow from "../home/Return-arrow";
import json from "../../Area.json";

const WorkSpace = ({ dispatch }) => { 
  const { prev, next } = React.useContext(FormContext);
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    if (selectedArea) dispatch(json.Work.find(({ id }) => id === selectedArea));
  }, [selectedArea]);

  return (
    <div>
      <button onClick={() => dispatch(json.Work[0])}>Agrego Area</button>
      <select onChange={(e) => setSelectedArea(e.currentTarget.value)}>
        {json.Work.map(({ id, area }) => (
          <option value={id}>{area}</option>
        ))}
      </select>
      Estas en zona laboral
      <ReturnArrow action={prev} />
      <GoForwardArrow action={next} />
    </div>
  );
};

export default WorkSpace;
