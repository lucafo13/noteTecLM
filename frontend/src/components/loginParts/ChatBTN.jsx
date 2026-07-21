const ChatBTN = ({ event, text }) => {
  return (
    <>
      <br />
      <button
        onClick={event}
      className="p-4 bg-[#7c3aed] text-white rounded-lg w-[543px] max-w-full    relative cursor-pointer text-2xl hover:scale-105 transition-transform duration-200">
        {text}
      </button>
    </>
  );
};
export default ChatBTN;
