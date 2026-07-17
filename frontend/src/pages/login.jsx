import { useState } from "react";
import CampLogin
 from "#components/campLogin";

const Login = ({ children, Darkmode }) => {

    return(
        <article className="flex w-lvw h-lvh p-5 bg-fundo-login">
          <CampLogin className="w-1/2"
          />  
          <div className="w-1/2 bg-black"></div>
        </article>
    )

}
export default Login