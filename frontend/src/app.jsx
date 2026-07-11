import { useState } from "react";
import "./App.css";
import Res from "./components/Res";
import Navbar from "./components/Navbar";
import Base from "./components/Base/Base";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { ResumoArea } from "#components/ResumoArea";

const App = () => {
   const [DarkMode, setDarkMode ] = useState(false)
  const [resumo, setResu] = useState("## Seu resumo sairá aqui...");

  return (
    <div className="flex max-h-screen">
      <SideBar DarkMode={DarkMode} />
      <main className={!DarkMode ?  "flex-1 p-8 flex-col flex" : "flex-1 p-8 bg-background-dark flex flex-col"}>
     
       <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-row flex-1 overflow-hidden">
       
          
        <Hero DarkMode={DarkMode} resumo={resumo} setResu={setResu}/>
        <ResumoArea resumo={resumo} DarkMode={DarkMode}/>
        </div>
      </main>
    </div>
  );
};

export default App;
