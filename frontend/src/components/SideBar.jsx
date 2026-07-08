import { useState } from "react";
import {
  LuNotebookPen,
  LuHistory,
  LuStar,
  LuBookOpen,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import { IoIosMore } from "react-icons/io";
import { IconBase } from "react-icons/lib";

const SideBar = (prop) => {
    const Ativo = "bg-primary-hover text-white hover: bg-primary-hover"
  const Links = [
    { icon: LuNotebookPen, text: "Resumos", Ativo: Ativo},
    { icon: LuHistory, text: "Histórico" },
    { icon: LuStar, text: "Favoritos" },
    { icon: LuBookOpen, text: "Diciplinas" },
  ];
  
  const bordaS = "border-slate-200 shadow-sm";
  const NavLink =
    "font-sans rounded-lg items-center flex px-5 py-4 hover:bg-primary-500 transition-all hover:text-white gap-3 cursor-pointer";
  return (
    <>
      <aside className="shrink-0 left-0 font-sans top-0 h-screen w-64 border-r border-slate-200 shadow-sm bg-white flex flex-col p-1">
        <div className="p-6 mb-3 flex gap-2 ">
          <h1 className="text-3xl  text-black  font-bold ">NoteTec </h1>
          <h1 className="text-primary font-bold text-3xl">LM</h1>
        </div>
        <nav className="flex flex-wrap flex-col gap-2">
          {Links.map(({ icon: Icon, text, Ativo }) => (
            <a key={text} className={`${NavLink} ${Ativo || ""}`}>
              <Icon className="text-xl" />
              <p>{text}</p>
            </a>
          ))}
        </nav>
        <div className="flex flex-col flex-wrap mt-auto gap-2 p-1 border-t border-slate-200 ">
          <a
            href=""
            className={NavLink}
          >
            <IoIosMore className="text-xl" /> <p>Mais</p>
          </a>
          <a
            href=""
            className={NavLink}
          >
            <LuLogOut className="text-xl" /> <p>Sair</p>
          </a>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
