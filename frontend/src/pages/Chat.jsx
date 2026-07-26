import { useState } from "react";
import SideBar from "#components/SideBar";
import Header from "#components/Header";
import HeroChat from "#components/HeroChat";
import { ResumoArea } from "#components/ResumoArea";
import { useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import axios from "axios";

const Chat = () => {
  useEffect(() => {
    const saude = async () => {
      const { data } = await axios.get("http://localhost:3000/health");
      console.log(data);
    };
    saude();
  }, []);

  const [DarkMode, setDarkMode] = useState(true);
  let [resumo, setResumo] = useState("# Resumo aqui")
  let [out, isOut] = useState(false );
  let [show, setShow] = useState(false);
  return (
    <div className="flex max-h-screen">
      <SideBar DarkMode={DarkMode} />
      <main
        className={
          !DarkMode
            ? "flex-1 p-8 flex-col flex"
            : "flex-1 p-8 bg-background-dark flex flex-col"
        }
      >
        <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-row flex-1 overflow-hidden gap-2">
          <HeroChat resumo={resumo} setResumo={setResumo}/>
          {show && (
            <ResumoArea
              resumo={resumo}
              DarkMode={DarkMode}
              out={out}
              isOut={isOut}
              fchar={() => setShow(false)}
            />
          )}
          {!show && (
            <button
              onClick={() => setShow(true)}
              className="
              fixed
              right-0
              top-1/2
              -translate-y-1/2
              bg-primary
              text-white
              p-3
              cursor-pointer
              rounded-l-xl
              shadow-lg
              hover:scale-105
              transition-all
            "
            >
              <IoChevronBack size={22} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Chat;
