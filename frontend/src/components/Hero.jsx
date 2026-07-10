import { useState } from "react";
import { PiHandWavingLight } from "react-icons/pi";
import { LuCloudUpload } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";
import Card from "./Card";

import axios from "axios";
import Markdown from "react-markdown";

const Hero = ({ DarkMode }) => {
  const alinaI = "flex items-center gap-3";
  const [Nome, SetNome] = useState("Aluno");
  const [file, setFile] = useState(null);
  const [dragano, Tadragano] = useState(false);
  const [resu, setResu] = useState("");
  const [car, setCar] = useState(false);
  const [pdf, setPdf] = useState(null)

  let aviso = "Arraste um arquivo aqui...";

  
   const enviaTrem = async(arquivo) => {
    if (!arquivo) {
      return;
    }
      const formData = new FormData();
      setCar(true);
      formData.append("file", arquivo);

      try {
        const res = await axios.post("http://localhost:3000/resu", formData);
        setResu(res.data.texto);
        setPdf(res.data.PDF)
        console.log(res.data.PDF)
        baixa(res.data.texto)
        alert('deu bom fml')
      } catch (error) {
        return alert("deu pau");
      } finally {
        setCar(false);
      }
    }
  
    const baixa = (markdown) => {
    const blob = new Blob([markdown], { type: "text/markdown" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a')
    a.href = url;
    a.download = "Resumo-lindo.md";

    a.click();

    URL.revokeObjectURL(url);
  };
 
 const pegaFile = (e) => {
    setFile(e.target.files[0]);
    const arquivo = e.target.files[0]
    enviaTrem(arquivo)
  };


  const seguranoAcima = (e) => {
    e.preventDefault();
    aviso = "Solte aqui !!!";

    Tadragano(true);
  };

  const saindoDrag = () => {
    Tadragano(false);
  };

  const soltou = (e) => {
    e.preventDefault();
    Tadragano(false);

    const arquivos = e.dataTransfer.files;
    if (arquivos && arquivos.length > 0) {
      const dropado = arquivos[0];

      if (dropado.type === "application/pdf" || dropado.name.endsWith(".pdf")) {
        const mockEvent = {
          target: { files: arquivos },
        };

        pegaFile(mockEvent);
      }
    }
  };


  return (
    <>
      <section className={DarkMode ? "font-sans p-5" : "font-sans p-5"}>
        <article className={alinaI}>
          <h1 className={!DarkMode ? ` text-4xl font-bold` : ` text-4xl font-bold text-white`}> Olá, {Nome}</h1>
          <PiHandWavingLight className={!DarkMode ? "text-4xl" : "text-white text-4xl"} />
        </article>
        <div className="py-4 pr-30">
          <h2 className={!DarkMode ? "text-2xl" : "text-2xl text-white"}>
            Envie aqui um PDF Para que possamos fazer um resumo sobre a matéria,
            possíveis questões e uma analise de acordo com as provas dos
            professores e garantir sua nota.
          </h2>
        </div>
        <br />
        <motion.div className="pr-40">
          <label
            onDragOver={seguranoAcima}
            onDrop={soltou}
            onDragLeave={saindoDrag}
            onDragEnter={seguranoAcima}
            htmlFor="file"
            className={!DarkMode ? `border-dashed gap-2 p-10 flex items-center cursor-pointer shadow-sm hover:bg-primary-400 transition-colors duration-500  py-25 bg-primary-50 justify-center text-4xl flex-col pr-10 border-primary border-2 rounded-4xl ${
              dragano ? "bg-primary-300" : "bg-primary-50 hover:bg-primary-400" 
            }` : `border-dashed gap-2 p-10 flex items-center cursor-pointer shadow-sm hover:bg-card-dark transition-colors duration-500  py-25 bg-surface-dark justify-center text-white text-4xl flex-col pr-10 border-primary border-2 rounded-4xl ${
              dragano ? "bg-card-dark" : "bg-primary-50 hover:bg-primary-400" }`}
          >
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="file"
              onChange={pegaFile}
            />
            {!file?.name ? (
              <LuCloudUpload className="text-7xl" />
            ) : (
              <FaRegFilePdf className="text-7xl" />
            )}

            <p className="text-center">
              {file?.name
                ? file?.name
                : dragano
                  ? "Solta agora!"
                  : "Arraste um PDF aqui..."
                    ? "Arraste um PDF aqui..."
                    : car
                      ? "Fazendo resumo..."
                      : "Arrasta aqui"}
            </p>
                <br />
            {car ? <p>Carregando...</p> : <p>Nada ainda</p> }
          </label>
        </motion.div>
        <br />
        <h1 className={!DarkMode ? "text-4xl font-bold transition-colors" : "text-4xl font-bold text-white"}>Envios recentes...</h1>
        <div className="flex gap-10">
                <Card DarkMode={DarkMode} descri={"Materia de ingles"} titulo={"Seu resumo MD"}/>
                <Card DarkMode={DarkMode} descri={"Materia de ingles"} titulo={"Seu resumo MD"}/>
        </div>
      </section>
    </>
  );
}

export default Hero;
