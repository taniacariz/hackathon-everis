import React from "react";
import moment from "moment";
import "moment/locale/es";

const Hour = () => {
  const today = new Date();

  return <div className="nav-hour">{moment(today).format("LLL")}</div>;
};

export default Hour;
