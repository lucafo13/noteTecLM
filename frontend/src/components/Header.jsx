import { useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

import { Switch } from "./ui/switch";

export const Header = ({ DarkMode, setDarkMode   }) => {
    const [ Nome, SetNome ] = useState("Aluno")
   

    // const setMode = () => {
    //     if(DarkMode === false){
    //         setDarkMode(true)
    //     } else {
    //         setDarkMode(false)
    //     }

    //     console.log(DarkMode)
    // }

    return(
        <>
            <header className="top-0 flex pb-2">
                <div className="flex ml-auto gap-2 items-center">
                    {!DarkMode ? <MdOutlineLightMode className="text-lg" /> : <MdDarkMode className="text-lg text-white transition-colors " />}
                    <Switch checked={DarkMode} onCheckedChange={setDarkMode} className="cursor-pointer" />
                </div>    
                
            </header>            
        </>
    )
}

export default Header