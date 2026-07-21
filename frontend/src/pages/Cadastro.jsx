import CampCadastro from "#components/CampCadastro";
import LoginImg from '@/assets/login.jpg'
const Cadastro = () => {
  return (
    <article className="flex w-lvw h-lvh  bg-fundo-login justify-between">
      <div className="w-1/2 relative">
        <img
          src={LoginImg}
          className="rounded-3xl relative w-full h-full object-cover"
          alt=""
        />
        {/* <div className="absolute inset-0 bg-violet-900/25 pointer-events-none" /> */}
      </div>
      <CampCadastro className="w-1/2 flex justify-center m-auto" />
    </article>
  );
};

export default Cadastro;
