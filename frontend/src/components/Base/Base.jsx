import { use, useState } from "react";
import styles from "./Base.module.css";
import axios from "axios";
import "../../index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion, scale } from "framer-motion";

const Base = () => {
  const [file, setFile] = useState(null);
  const [resu, setResu] = useState("resu");
  const [carr, setCarr] = useState(false);

  const pegArquivo = (e) => {
    setFile(e.target.files[0]);
  };

  const envia = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setCarr(true);
    try {
      const res = await axios.post("http://localhost:3000/resu", formData);
      setResu(res.data.texto);
      console.log(res.data.texto);
    } catch (error) {
      return console.log("errito");
      setResu(
        `O nosso servidor esta ocupado, o erro n caso  normalmente ligado ao cors, espere por atualizaç~eos ou tente dps`,
      );
    } finally {
      setCarr(false);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="flex w-1/2 h-4/5 border justify-center items-center m-auto text-center p-5 flex-wrap gap-5 rounded-3xl"
        >
          <h1 className="text-6xl">Primeiro teste da NoteTec</h1>

          <div className="p-10 gap-5">
            <label htmlFor="file" className="text-4xl">
              Seu PDF
            </label>
            <br />
            <input
              type="file"
              accept=".pdf"
              name="file"
              id="file"
              className={styles.input}
              onChange={pegArquivo}
            />
            <br />
            <button
              onClick={envia}
              className="w-11/12 h-3/4 border-2 rounded-full mt-5 hover:scale-110 transition-all cursor-pointer mb-10 "
            >
              {carr ? "Gerando resumo..." : "gerar resumo"}
            </button>
            <br />
            <br />
          </div>
        </motion.div>
        <div className="p-20 ">
          <ReactMarkdown remarkPlugins={remarkGfm}>{resu}</ReactMarkdown>
        </div>
      </main>
    </>
  );
};

export default Base;
