import { use, useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { Bubbles } from "./Bubbles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdClose } from "react-icons/io";
import { LuCopy, LuCheck } from "react-icons/lu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

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
// function CodeBlock({ className, children, DarkMode }) {
//   const [copied, setCopied] = useState(false);
//   const match = /language-(\w+)/.exec(className || "");
//   const language = match ? match[1] : "text";
//   const code = String(children).replace(/\n$/, "");

//   if (!match) {
//     return (
//       <code
//         className={
//           DarkMode
//             ? "bg-slate-700 text-white px-1 rounded"
//             : "bg-slate-200 text-black px-1 rounded"
//         }
//       >
//         {children}
//       </code>
//     );
//   }

//   function handleCopy() {
//     navigator.clipboard.writeText(code);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   }

//   return (
//     <div className="relative my-3 rounded-lg overflow-hidden">
//       <div
//         className={`flex justify-between items-center px-3 py-1 text-xs ${
//           DarkMode
//             ? "bg-slate-800 text-slate-300"
//             : "bg-slate-200 text-slate-600"
//         }`}
//       >
//         <span>{language}</span>

//         <button
//           onClick={handleCopy}
//           className="flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer"
//         >
//           {copied ? (
//             <>
//               <LuCheck /> Copiado!
//             </>
//           ) : (
//             <>
//               <LuCopy /> Copiar
//             </>
//           )}
//         </button>
//       </div>

//       <SyntaxHighlighter
//         language={language}
//         style={DarkMode ? oneDark : oneLight}
//         customStyle={{ margin: 0, borderRadius: 0 }}
//       >
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// }

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
            : "w-11/12 p-2 overflow-y-auto wrap-break-word  prose max-w-none"
        }
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{resumo}</ReactMarkdown>
      </div>
    </article>
  );
};
