import { useState } from "react";
import InputsLogin from "./loginParts/InputsLogin";
import ButtonLogin from "./loginParts/ButtonLogin";

const CampLogin = () => {
    return(
        <article className="bg-fundo-login flex flex-col p-6 gap-2 justify-center">
            <div >
                <h1 className="text-[60px] text-white">Bem vindo de volta</h1>
                         </div>
            <div className="gap-3">
                <InputsLogin/>
                <br />
                <ButtonLogin/>
            </div>
        </article>
    )   
} 

export default CampLogin