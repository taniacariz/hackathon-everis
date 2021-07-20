import React from "react";
import { BodyLogin } from "../components-login/BodyLogin";
import { FooterLogin } from "../components-login/FooterLogin";
import { HeaderLogin } from "../components-login/HeaderLogin";

export const Login = () => {
  return (
    <div className="container-login">
      <HeaderLogin />
      <BodyLogin />
      <FooterLogin />
    </div>
  );
};
