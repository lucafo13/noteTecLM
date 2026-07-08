import { useState } from "react";
import { PiHandWavingLight } from "react-icons/pi";
import { LuCloudUpload } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";

const Hero = () => {
  const alinaI = "flex items-center gap-3";
  const [Nome, SetNome] = useState("Visitante");
  const [file, setFile] = useState("Arraste um PDF aqui...");

  const pegaFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <section className="font-sans p-5">
        <article className={alinaI}>
          <h1 className={` text-4xl font-bold`}> Olá, {Nome}</h1>
          <PiHandWavingLight className="text-4xl" />
        </article>
        <div className="py-4 pr-30">
          <h2 className="text-2xl">
            Envie aqui um PDF Para que possamos fazer um resumo sobre a matéria,
            possíveis questões e uma analise de acordo com as provas dos
            professores e garantir sua nota.
          </h2>
        </div>
        <br />
        <motion.div className="pr-30">
          <label
            htmlFor="file"
            className="border-dashed gap-2 p-10 flex items-center cursor-pointer shadow-sm hover:bg-primary-400 transition-colors duration-500  py-25 bg-primary-50 justify-center text-4xl flex-col pr-10 border-primary border-2 rounded-4xl "
          >
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="file"
              onChange={pegaFile}
            />
            {!file.name ? (
              <LuCloudUpload className="text-7xl" />
            ) : (
              <FaRegFilePdf className="text-7xl" />
            )}

            <p className="text-center">
              {file.name || "Arraste um PDF aqui..."}
            </p>
          </label>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
