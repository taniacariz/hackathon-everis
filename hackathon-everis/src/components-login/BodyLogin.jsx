import "./login.css";
import React from "react";
import { Login } from "../views/Login";


export const BodyLogin = () => {
  return (
    <div className="container-body">
      <img
        className="container-img"
        src="https://firebasestorage.googleapis.com/v0/b/reactivegirls.appspot.com/o/ImagenTeclado.jpg?alt=media&token=191a4976-0691-4c09-a76f-a252b65a60fd"
        alt="Teclado"/>
      <Login />
    </div>
  );
};
