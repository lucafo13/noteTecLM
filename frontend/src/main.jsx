import App from "./App";
import reactDom from 'react-dom/client';
import './App.css' ;
import { StrictMode } from "react";

reactDom.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
    </StrictMode>
)