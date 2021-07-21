/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import json from "../../Area.json";

const WorkSpace = ({ dispatch }) => {
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
    </div>
  );
};

export default WorkSpace;
