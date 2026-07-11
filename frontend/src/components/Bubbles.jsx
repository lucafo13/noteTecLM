import { useState } from "react";
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'

export const Bubbles = ({ DarkMode }) => {
  let [menssage, SetMenssage] = useState([
    {
      key: "Ia",
      menssage: "Mensagem da Ia",
    },
    {
      key: "User",
      menssage: "Mensagem do User",
    },
  ]);


  const IaBubble = '';
  const UserBubble = ''
  return(
    <div>

    </div>
  )

};
