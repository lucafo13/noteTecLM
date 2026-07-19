import { useState } from "react";
import InputsLogin from "./loginParts/InputsLogin";
import ButtonLogin from "./loginParts/ButtonLogin";
import Google from "./loginParts/Google";

const CampLogin = () => {
  let [user, setUser] = useState('')
  let [senha, setSenha] = useState('')

  const login = async (email, senha) => {
    
    const resposta = await axios.post('http:localhost:5173/login', {
      email, senha
    }, {wit})
  }

  return (
    <article className="bg-fundo-login flex flex-col justify-center m-auto p-6 gap-2 ">
      <div className="mb-5"> 
        <h1 className="text-[60px] text-white">Bem vindo de volta</h1>
        <h2 className="text-[25px] text-white">Continue aprendendo com seus PDFs</h2>
      </div>
      
      <br />
      <div className="gap-3">
        <InputsLogin user={user} setUser={setUser} senha={senha} setSenha={setSenha} />
        <br />
        <ButtonLogin />
        <br />
        <Google/>
      </div>
    </article>
  );
};

export default CampLogin;
