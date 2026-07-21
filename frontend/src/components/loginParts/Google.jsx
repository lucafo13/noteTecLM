import { Button } from "#components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Google = () => {
  return (
    <div>
      <div className="flex items-center my-6">
        <div className="border-t border-slate-600 flex-1"></div>
        <span className="text-white m-4">Ou</span>
        <div className="border-t border-slate-600 flex-1"></div>
      </div>
      <div className="flex flex-col justify-center ">
        <Button variant="outline" className="w-1/2 m-auto flex h-[50px] cursor-pointer " onClick={() => {}}>
        <FcGoogle className="text-4xl"/>
      

          Login com Google
        </Button>
      </div>
      <br />
      <div className="text-center">
        <Link to={'/Cadastro'} className="text-primary">Ou crie sua conta aqui</Link>
      </div>
    </div>
  );
};

export default Google;
