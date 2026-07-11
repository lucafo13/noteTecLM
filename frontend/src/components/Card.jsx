import { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { motion, scale } from "framer-motion";

const Card = ({ DarkMode, descri, titulo }) => {
    return(
        <motion.div   className={!DarkMode ? "transition-all flex h-auto p-4 items-center w-2/5 rounded-lg border gap-3 mt-3 hover:-translate-y-1/12" : " mt-3 hover:-translate-y-1/12 transition-all border-border-dark flex  w-2/5 h-auto p-4  rounded-lg items-center bg-card-rec gap-3"}>
            <div>
                <FaFilePdf className={!DarkMode ? "text-4xl" :"text-4xl text-white"}/>
            </div>
            <div className="transition-all flex flex-col top-0">
                <h2 className={!DarkMode ? "text-3xl" : "text-3xl text-white"}>{titulo}</h2>
                <p className={!DarkMode ? " ": "text-white" }>{descri}</p>
            </div>
        </motion.div>
    )
}

export default Card