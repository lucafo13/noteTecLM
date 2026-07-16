import App from "./App";
import reactDom from 'react-dom/client';
import './App.css' ;
import { StrictMode } from "react";
import './index.css'
import 'react-icons'
import { BrowserRouter } from "react-router-dom";
reactDom.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <StrictMode>
    <App />
    </StrictMode>
   </BrowserRouter>
)