import { useState } from "react";
import "./App.css";
import Res from "./components/Res";
import Navbar from "./components/Navbar";
import Base from "./components/Base/Base";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
   const [DarkMode, setDarkMode ] = useState(false)


  return (
    <div className="flex min-h-screen">
      <SideBar DarkMode={DarkMode} />
      <main className={!DarkMode ?  "flex-1 p-8" : "flex-1 p-8 bg-background-dark"}>
        <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <Hero DarkMode={DarkMode}/>
      </main>
    </div>
  );
};

export default App;
