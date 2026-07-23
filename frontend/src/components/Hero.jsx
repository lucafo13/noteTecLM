import { useState } from "react";
import { PiHandWavingLight } from "react-icons/pi";
import { LuCloudUpload } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";
import Card from "./Card";
import { toast } from "sonner";
import { data, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
import { useEffect } from "react";

const Hero = ({ DarkMode, resumo, setResu, out }) => {
  useEffect(() => {
    const me = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/me", {
          withCredentials: true,
        });
        SetNome(data.usuario.nome);
        await Notification.requestPermission();
      } catch (error) {}
    };
    me();
    console.log(Notification.permission);
  }, []);
  const alinaI = "flex items-center gap-3";
  const [Nome, SetNome] = useState("Aluno");
  const [file, setFile] = useState(null);
  const [dragano, Tadragano] = useState(false);
  const [car, setCar] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [err, serER] = useState(false);
  const navigate = useNavigate();

  let men = "Nada ainda...";
  let uploadTexto = "";
  // file?.name
  //               ? file?.name
  //               : dragano
  //                 ? "Solta agora!"
  //                 : "Arraste um PDF aqui..."
  //                   ? "Arraste um PDF aqui..."
  //                   : car
  //                     ? "Fazendo resumo..."
  //                     : "Arrasta aqui"

  if (file?.name) {
    uploadTexto = file?.name;
  } else if (dragano) {
    uploadTexto = "Solte agora!";
  } else if (!car) {
    uploadTexto = "Arraste Aqui";
  } else if (!file?.name) {
    uploadTexto = "Arraste Aqui";
  } else {
    uploadTexto = "Arraste aqui";
  }
  if (car) {
    men = "carregando...";
  } else if (err) {
    men = "Falha !! alta demanda";
  } else {
    men = "Nada ainda";
  }

  const uploadBase = `
  block
border-2 border-dashed
rounded-4xl
flex flex-col items-center justify-center
gap-2
p-5 py-15 
cursor-pointer
transition-all duration-300
text-4xl
w-full  
`;
  const uploadTheme = DarkMode
    ? `
    bg-card-dark
    text-white
    border-primary-600
    hover:bg-[#28243a]
  `
    : `
    bg-primary-50
    text-ink
    border-primary
    hover:bg-primary-100
  `;
  const uploadDrag = dragano ? "scale-[1.02] border-primary-400" : "";
  let aviso = "Arraste um arquivo aqui...";

  const enviaTrem = async (arquivo) => {
    if (!arquivo) {
      return;
    }

    const formData = new FormData();
    setCar(true);
    formData.append("file", arquivo);

    try {
      const res = await axios.post("http://localhost:3000/resu", formData, {
        withCredentials: true,
      });
      const resultado = res.data;
      console.log(res.status);
      setResu(resultado);
      setPdf(resultado);
      // console.log(res.data.texto);
      // baixa(res.data.texto);
      
      setResu(resultado);
      serER(false);
      const jsonRes = await axios.post("http://localhost:3000/json",  {resumo: resultado}, {withCredentials: true})
      console.log(jsonRes.data)
      toast.success("Resumo concluido", {
        description: "Veja seu resumo na aba de resumos",
      });
      if (Notification.permission === "granted") {
        new Notification("funcionou", {
          body: "seu pdf foi resumido! Veja na aba de resumos",
          icon: "/favicon.svg",
        });
      }
    } catch (error) {
      serER(true);
      console.log(error);
      toast.error("Limite estourado");
      return;
    } finally {
      setCar(false);
    }
  };

  const baixa = (markdown) => {
    const blob = new Blob([markdown], { type: "text/markdown" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Resumo-lindo.md";

    a.click();

    URL.revokeObjectURL(url);
  };

  const pegaFile = (e) => {
    setFile(e.target.files[0]);
    const arquivo = e.target.files[0];
    enviaTrem(arquivo);
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
      <section
        className={
          DarkMode
            ? "font-sans p-2 w-4/5 max-h-screen overflow-y-auto"
            : "font-sans p-1 w-4/5 max-h-screen"
        }
      >
        <article className={alinaI}>
          <h1
            className={
              !DarkMode
                ? ` text-4xl font-bold`
                : ` text-4xl font-bold text-white`
            }
          >
            {" "}
            Olá, {Nome}
          </h1>
          <PiHandWavingLight
            className={!DarkMode ? "text-4xl" : "text-white text-4xl"}
          />
        </article>
        <div className="py-4 pr-10">
          <h2 className={!DarkMode ? "text-2xl" : "text-2xl text-white"}>
            Envie aqui um PDF Para que possamos fazer um resumo sobre a matéria,
            possíveis questões e uma analise de acordo com as provas dos
            professores e garantir sua nota.
          </h2>
        </div>
        <br />
        <motion.div className="pr-10">
          <label
            onDragOver={seguranoAcima}
            onDrop={soltou}
            onDragLeave={saindoDrag}
            onDragEnter={seguranoAcima}
            htmlFor="file"
            className={`${uploadBase} ${uploadTheme} ${uploadDrag}`}
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

            <p className="text-center">{uploadTexto}</p>
            <br />
            <p>{men}</p>
          </label>
        </motion.div>
        <br />
        <h1
          className={
            !DarkMode
              ? "text-4xl font-bold transition-colors"
              : "text-4xl font-bold text-white"
          }
        >
          Envios recentes...
        </h1>
        <div className="flex gap-10">
          <Card
            DarkMode={DarkMode}
            descri={"Materia de ingles"}
            titulo={"Seu resumo MD"}
          />
          <Card
            DarkMode={DarkMode}
            descri={"Materia de Programação"}
            titulo={"Seu resumo MD"}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
