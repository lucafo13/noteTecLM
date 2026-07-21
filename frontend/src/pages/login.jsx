import { useState } from "react";
import CampLogin
 from "#components/campLogin";
import LoginImg from "@/assets/login.jpg"

const Login = ({ children, Darkmode }) => {

    return(
        <article className="flex w-lvw h-lvh  bg-fundo-login justify-between">
          <CampLogin className="w-1/2 flex justify-center m-auto"
          />
              <div className="w-1/2 ">
        <img
          src={LoginImg}
          className="rounded-3xl relative w-full h-full object-cover"
          alt=""
        />
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
      </div>
        </article>
    )

}
export default Login