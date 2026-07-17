import { useState } from "react";
import CampLogin
 from "#components/campLogin";

const Login = ({ children, Darkmode }) => {

    return(
        <article className="flex w-lvw h-lvh  bg-fundo-login justify-between">
          <CampLogin className="w-1/2 flex justify-center m-auto"
          />
          <div className="w-1/2 bg-black"></div>
        </article>
    )

}
export default Login