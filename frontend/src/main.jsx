import App from "./app.jsx";
import reactDom from 'react-dom/client';

import { StrictMode } from "react";
import './index.css';
import 'react-icons';
import { BrowserRouter } from "react-router-dom";

reactDom.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </StrictMode>
);