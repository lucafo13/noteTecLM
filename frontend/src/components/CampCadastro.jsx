import { use, useRef, useState } from "react";
import InputsLogin from "./loginParts/InputsLogin";
import ButtonLogin from "./loginParts/ButtonLogin";
import Google from "./loginParts/Google";
import axios from "axios";
import { toast } from "sonner";
import { MdTypeSpecimen } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import InputsCad from "./loginParts/inputsCad";
import { cadSchena } from "../../schemas/auth.schema";
import z from "zod";
const CampCadastro = () => {
  let [nome, setNome] = useState("");
  let [user, setUser] = useState("");
  let [senha, setSenha] = useState("");
  let [newSenha, setNewSenha] = useState("");

  const navigate = useNavigate();
  const texto = "Cadastre-se";
  class usuario {
    constructor(nome, email, senha, confirma) {
      ((this.email = email), (this.senha = senha), (this.nome = nome));
    }
  }

  const Cad = async (event) => {
    
    event.preventDefault();
    console.log("a")
    if (newSenha !== senha) {
      toast.error("as senhas não se considem")
      return
    }
 
    const req = new usuario(nome, user, senha);

    const schema = cadSchena.safeParse(req)
  
    
    if(!schema.success){
      toast.error(schema.error.issues[0].message)
      return
    }
    try {

      const resposta = await axios.post("http://localhost:3000/cadastro", req, {
        withCredentials: true,
      });

      await toast.success("Usuario cadastrado", {
        description: ` faça seu login`,
      });

      console.log(req);

      navigate("/login");
    } catch (error) {
      ;
      console.log(error);
      return;
    }
  };

  return (
    <article className="bg-fundo-login flex flex-col justify-center m-auto p-6 gap-2 ">
      <div className="mb-5">
        <h1 className="text-[60px] text-white">Cadastre-se aqui</h1>
        <h2 className="text-[25px] text-white">
          Se cadastre com suas credências
        </h2>
      </div>

      <br />
      <div className="gap-3">
        <InputsCad
          nome={nome}
          setNome={setNome}
          user={user}
          setUser={setUser}
          event={Cad}
          senha={senha}
          setSenha={setSenha}
          newSenha={newSenha}
          setNewSenha={setNewSenha}
        />
       
        <br />
        <div>
          <div className="flex items-center my-3">
            <div className="border-t border-slate-600 flex-1"></div>
            <span className="text-white m-4">Já possui conta?</span>
            <div className="border-t border-slate-600 flex-1"></div>
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/login"
            className="text-primary font-medium hover:underline transition-colors duration-200"
          >
            Faça login aqui
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CampCadastro;
