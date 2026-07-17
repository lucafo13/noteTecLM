import { useState } from "react";
import InputsLogin from "./loginParts/InputsLogin";
import ButtonLogin from "./loginParts/ButtonLogin";
import Google from "./loginParts/Google";

const CampLogin = () => {
  return (
    <article className="bg-fundo-login flex flex-col justify-center m-auto p-6 gap-2">
      <div> 
        <h1 className="text-[60px] text-white">Bem vindo de volta</h1>
        <h2 className="text-[25px] text-white">Faça login na sua conta aqui</h2>
      </div>
      <br />
      <div className="gap-3">
        <InputsLogin />
        <br />
        <ButtonLogin />
        <br />
        <Google/>
      </div>
    </article>
  );
};

export default CampLogin;
