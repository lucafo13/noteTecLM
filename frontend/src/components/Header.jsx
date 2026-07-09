import { useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

import { Switch } from "./ui/switch";

export const Header = (props) => {
    const [ Nome, SetNome ] = useState("Visitante")
    const [DarkMode, setDarkMode ] = useState(true)

    const setMode = () => {
        if(DarkMode === false){
            setDarkMode(true)
        } else {
            setDarkMode(false)
        }

        console.log(DarkMode)
    }

    return(
        <>
            <header className="top-0 flex ">
                <div className="flex ml-auto gap-2 items-center">
                    {DarkMode ? <MdOutlineLightMode className="text-lg" /> : <MdDarkMode className="text-lg   " />}
                    <Switch onClick={setMode} className="cursor-pointer" />
                </div>    
                
            </header>            
        </>
    )
}

export default Header