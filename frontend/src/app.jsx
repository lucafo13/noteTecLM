import { useState } from "react";
import './App.css'
import Res from "./components/Res";
import Navbar from "./components/Navbar";
import Base from "./components/Base/Base";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import Header from "./components/Header";

const App = () => {
    return(
        <div className="flex min-h-screen">  
            <SideBar />
           <main className="flex-1 p-8">
            <Header />
            <Hero />
            </main> 
        </div>
    )
}

export default App