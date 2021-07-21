import React from "react";
import { ContentLogin } from "../components/login/ContentLogin";
import { FooterLogin } from "../components/login/FooterLogin";
import { HeaderLogin } from "../components/login/HeaderLogin";

export const Login = () => {
  return (
    <div className="container-login">
      <HeaderLogin />
      <ContentLogin />
      <FooterLogin />
    </div>
  );
};
