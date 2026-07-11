import { useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Bubbles } from "./Bubbles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const ResumoArea = ({ DarkMode, resumo }) => {

  return (
    <article className="flex flex-col p-5 border-b border-slate-600 shadow-sm w-2/5 h-full rounded-lg">
      <div className="w-full flex  items-center border-b border-slate-200 pb-2">
        <LuNotebookPen className={DarkMode ? 'text-4xl text-white' : 'text-4xl text-black'} />
        <h1 className={DarkMode ? 'text-white' : 'text-black'}>Resumo</h1>
      </div>

      <div className={DarkMode ? ' w-11/12 p-2 overflow-y-auto wrap-break-word  prose-invert prose max-w-none' : 'w-11/12 p-2 overflow-y-auto wrap-break-word  prose max-w-none'}>
        <ReactMarkdown remarkPlugins={[remarkGfm] }>{resumo}</ReactMarkdown>
      </div>
    </article>
  );
};
