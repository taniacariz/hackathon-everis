import React from "react";
import moment from "moment";
import "moment/locale/es";

const Hour = () => {
  const today = new Date();

  return (
    <div className="navHour">
      <div className="navHourNumber">{moment(today).format("LLL")}</div>
    </div>
  );
};

export default Hour;
