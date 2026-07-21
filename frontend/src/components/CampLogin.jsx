import { useState } from "react";
import InputsLogin from "./loginParts/InputsLogin";
import ButtonLogin from "./loginParts/ButtonLogin";
import Google from "./loginParts/Google";
import axios from "axios";
import { toast } from "sonner";
import { MdTypeSpecimen } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/auth.login.schema";

const CampLogin = () => {
  let [user, setUser] = useState("");
  let [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const texto = "Faça login";
  class usuario {
    constructor(email, senha) {
      ((this.email = email), (this.senha = senha));
    }
  }

  const login = async () => {
    const req = new usuario(user, senha);

    const schema = loginSchema.safeParse(req);
    if (!schema.success) {
      toast.error(schema.error.issues[0].message);
      return;
    }
    try {
      const resposta = await axios.post("http://localhost:3000/login", req, {
        withCredentials: true,
      });
      const { data } = await axios.get("http://localhost:3000/me", {
        withCredentials: true,
      });
      console.log(data);
      console.log(resposta.status)
      toast.success("login realizado", {
        description: `ola ${data.usuario.nome}`,
      });

      console.log(req);
      console.log(resposta.data);
      navigate("/home");
    } catch (error) {
      toast.error("Não foi possivel realizar o login", {
        description: "suas credências podem estar invalidas, tente novamente",
      });
      console.log(error);
      return;
    } finally {
    }
  };

  return (
    <article className="bg-fundo-login flex flex-col justify-center m-auto p-6 gap-2 ">
      <div className="mb-5">
        <h1 className="text-[60px] text-white">Bem vindo de volta</h1>
        <h2 className="text-[25px] text-white">
          Continue aprendendo com seus PDFs
        </h2>
      </div>

      <br />
      <div className="gap-3">
        <InputsLogin
          user={user}
          setUser={setUser}
          senha={senha}
          setSenha={setSenha}
        />
        <br />
        <ButtonLogin event={login} text={texto} />
        <br />
        <Google />
      </div>
    </article>
  );
};

export default CampLogin;
