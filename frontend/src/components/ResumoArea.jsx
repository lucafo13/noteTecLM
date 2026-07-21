import { use, useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Bubbles } from "./Bubbles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdClose } from "react-icons/io";
import { LuCopy, LuCheck } from "react-icons/lu";
import ButtonLogin from './loginParts/ButtonLogin'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@base-ui/react/button";
import ChatBTN from "./loginParts/ChatBTN";

export const ResumoArea = ({ DarkMode, resumo, out, isOut, fchar }) => {
  const DarkModeColor = DarkMode ? "text-white" : "text-black";

  const baseAr = !DarkMode ? 
    "flex flex-col transition-transform transition-all duration-300 p-5 border-b border-slate-600 shadow-sm w-2/5 h-full rounded-lg" :  "bg-card-dark flex flex-col transition-transform transition-all duration-300 p-5 border border-border-dark shadow-sm w-2/5 h-full rounded-lg";
  const changeOut = () => {
    if (!out) {
      isOut(true);
      console.log("out");
    } else {
      isOut(false);
    }
  };
  return (
    <article
      className={
        out ? `${baseAr}  translate-x-full ` : `${baseAr} translate-x-0`
      }
    >
      <div className={!DarkMode ? "w-full flex justify-between items-center border-b border-slate-200 pb-2" : "w-full flex justify-between items-center border-b border-border-dark pb-2"}>
        <div className="flex items-center gap-2">
          <LuNotebookPen
            className={DarkMode ? "text-4xl text-white" : "text-4xl text-black"}
          />
          <h1 className={DarkMode ? "text-white" : "text-black"}>Resumo</h1>
        </div>
        <div>
          <IoMdClose
            onClick={fchar}
            className={`${DarkModeColor} cursor-pointer hover:scale-115 transition-all duration-75 `}
          />
        </div>
      </div>

      <div
        className={
          DarkMode
            ? " w-11/12 p-2 overflow-y-auto wrap-break-word  prose-invert prose max-w-none"
            : "w-11/12 p-2 overflow-y-auto wrap-break-word  prose max-w-none"}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{resumo}</ReactMarkdown>
        {resumo !== "## Seu resumo sairá aqui..." || resumo !== null || resumo !== "" ?  <ChatBTN text={"Converse sobre esse resumo"}/> : <div></div>}
      </div>
  </article>
  );
};
