import { useRef } from "react";
import { MdOutlineMail, MdKey, MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import ButtonLogin from "./ButtonLogin";

const InputsCad = ({
  nome,
  setNome,
  senha,
  setSenha,
  user,
  setUser,
  newSenha,
  setNewSenha,
  event
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const inputClass =
    "flex bg-input-bg rounded-lg text-white p-4 w-[543px] items-center gap-2";
  const inputDef = "outline-none w-full relative h-full pl-2 ";
  return (
    <form onSubmit={event} className="flex flex-col gap-5 ">
      <div>
        <label htmlFor="nome" className="text-white">
          Nome
        </label>
        <div className={inputClass}>
          <MdDriveFileRenameOutline className="text-3xl " />
          <input
            className={inputDef}
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={nome}
            id="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <div className={inputClass}>
          <MdOutlineMail className="text-3xl " />
          <input
            className={inputDef}
            type="email"
            name="email"
            placeholder="seuemail@seuserviço.com"
            value={user}
            id="email"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="senha" className="text-white">
          Senha
        </label>
        <div className={inputClass}>
          <MdKey className="text-3xl" />
          <input
            className={inputDef}
            type="password"
            name="password"
            value={senha}
            placeholder="*******"
            id="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="senha2" className="text-white">
            Confirmar senha
          </label>
          <div className={inputClass}>
            <MdKey className="text-3xl" />
            <input
              className={inputDef}
              type="password"
              name="password"
              value={newSenha}
              placeholder="*******"
              id="senha2"
              onChange={(e) => setNewSenha(e.target.value)}
            />
          </div>
        </div>
      </div>
      <br />
      <button

        type="submit"
        className="p-5 bg-[#7c3aed] text-white rounded-lg w-[543px] cursor-pointer text-2xl hover:scale-105 transition-transform duration-200"
      >
       Cadastre-se
      </button>
    </form>
  );
};

export default InputsCad;
