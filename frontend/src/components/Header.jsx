import { useState } from "react";


export const Header = (props) => {
    const [ Nome, SetNome ] = useState("Visitante")

    return(
        <>
            <h1>Olá {Nome}</h1>
        </>
    )
}