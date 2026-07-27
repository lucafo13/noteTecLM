import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GrSend } from "react-icons/gr";
import { toast } from "sonner";
import { Bubble, BubbleGroup, BubbleContent } from "./ui/bubble";
const HeroChat = ({ resumo, setResumo }) => {
  const bottom = useRef(null)
  
  const { id } = useParams();
  let [historico, SetMenssage] = useState([
    {
      key: "Ia",
      menssage: "",
    },
    {
      key: "User",
      menssage: "",
    },
  ]);

    let [mensagem, setSend] = useState("");
    const apertei = (event) => {
      if(event.key === "Enter" && !event.shiftKey){
        event.preventDefault();
        chat(event)
      }
    }
    class historiClass {
    constructor(resumo_id, resumo, historico) {
      this.resumo_id = resumo_id
      this.resumo = resumo;
      this.historico = historico;
    }
  }
  const chat = async (event) => {
    event.preventDefault()  
    if(mensagem === ""){
  
      toast.error("Escreve imbecil")
      return
    }
    const newMen = {
      key: "User",
      menssage: mensagem
    }
    const newHisto = [...historico, newMen]
    try {
      SetMenssage(newHisto);
      console.log(newHisto)
      setSend("")
      const req = new historiClass(id, resumo, newHisto);
      const res = await axios.post("https://noteteclm.onrender.com/chat", req, {
        withCredentials: true,
      });
      const resposta = res.data?.resposta || "Deu pau e não foi"
      console.log(resposta);
      SetMenssage([...newHisto, {
        key: "Ia",
        menssage: resposta,
      }]);
    } catch (error) {
      console.log(error.message)
      toast(error?.message)
    }
  };
  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth'})
    const getResumo = async () => {
      try {
        const { data } = await axios.get(
          `https://noteteclm.onrender.com/resumos/${id}`,
          { withCredentials: true },
        );
        console.log(data);
        setResumo(data.resumo.conteudo);
      } catch (error) {}
    };
    getResumo();
  }, [historico]);

  return (
    <article className="scroll-smooth font-sans p-2 w-4/5 max-h-screen overflow-y-auto flex flex-col justify-between">
      <div className=" flex-1 overflow-y-auto w-11/12 p-2  wrap-break-word  prose-invert prose max-w-none">
        <ReactMarkdown remarkPlugins={remarkGfm}>{resumo}</ReactMarkdown>
        <br />
        <BubbleGroup className={"flex justify-end items-end"}>
        {historico.map((msg) => {
         return msg.key === "User" && msg.menssage !== ""  ? <Bubble className={"flex justify-end items-end mt-4 mb-4"}><BubbleContent className={"p-3 text-[17px]"}>{msg.menssage}</BubbleContent></Bubble> : 
          <div className="flex items-start flex-col justify-start prose text-left prose-invert text-gray max-w-none ">

          <ReactMarkdown remarkPlugins={remarkGfm} >{msg.menssage}</ReactMarkdown>
          </div>
        })}
          <div ref={bottom}></div>
        </BubbleGroup>
        
      </div>
      <form onSubmit={chat}className="flex items-center gap-2 mt-auto pt-3">
        <input
          type="text"
          name=""
          value={mensagem}
          id=""
          onChange={(e) => {
            setSend(e.target.value);
          }}
          placeholder="Hello"
          className="w-full border rounded-lg bg-primary p-5 outline-none text-white origin-bottom"
        />
        <button className="h-[70px] cursor-pointer hover:rotate-360 transition-transform duration-700 w-[70px] bg-primary rounded-lg border flex justify-center items-center">
          <GrSend className=" text-3xl text-white" />
        </button>
      </form>
    </article>
  );
};

export default HeroChat;
