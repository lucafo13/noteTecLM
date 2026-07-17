import { MdOutlineMail, MdKey } from "react-icons/md";

const InputsLogin = () => {
    const inputClass = "flex bg-input-bg rounded-lg text-white p-4 w-[543px] items-center gap-2"
  return (
    <article className="flex flex-col gap-5 ">
      <div>
        <label htmlFor="email" className="text-white">Email</label>
        <div className={inputClass}>
          <MdOutlineMail className="text-3xl "/>
          <input
          className="outline-none"
            type="email"
            name="email"
            placeholder="seuemail@seuserviço.com"
            id="email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="senha" className="text-white">Senha</label>
        <div className={inputClass}>
          <MdKey className="text-3xl"/>
          <input
            type="password"
            name="password"
            className="outline-none"
            placeholder="*******"
            id="senha"
          />
        </div>
      </div>
    </article>
  );
};


export default InputsLogin