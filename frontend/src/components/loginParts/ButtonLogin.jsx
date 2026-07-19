const ButtonLogin = ({ event }) => {
  return (
    <>
      <br />
      <button
        onClick={event}
      className="p-5 bg-[#7c3aed] text-white rounded-lg w-[543px] cursor-pointer text-2xl hover:scale-105 transition-transform duration-200">
        Faça Login
      </button>
    </>
  );
};
export default ButtonLogin;
