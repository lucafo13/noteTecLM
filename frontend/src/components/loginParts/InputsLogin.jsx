import { MdOutlineMail, MdKey } from "react-icons/md";
import { Link } from "react-router-dom";

const InputsLogin = ({ senha, setSenha, user, setUser }) => {
  const inputClass =
    "flex bg-input-bg rounded-lg text-white p-4 w-[543px] items-center gap-2";
  const inputDef = "outline-none w-full relative h-full pl-2"
  return (
    <article className="flex flex-col gap-5 ">
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
        <div className="text-end">
          <Link to="/home" className="decoration-solid text-primary">
            Esqueceu sua senha?
          </Link>
        </div>
      </div>
    </article>
  );
};

export default InputsLogin;
