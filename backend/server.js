/* Bibliotequitas */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PDFParse } from "pdf-parse";
import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { Groq } from "groq-sdk/client.js";
import cookieParser from "cookie-parser";

/* import */
import prompTmateria from "./IA/prompts/prompt.materia.js";
import promptContext from "./IA/prompts/prompt.context.js";
import upload from "./storage/multer.upload.js";
import { reqIa } from "./IA/ia.service.js";
import { readPdf } from "./storage/pdfReader.js";
import { errorCheck } from "./storage/error/error.js";
import routerResu from "./routes/resumo.js";
import routerUser from './routes/login/getUsers.js'
import routerChat from './routes/chat.router.js'
import routerCadastro from './routes/login/cadUser.js'
import routerLogin from './routes/login/login.js'
import routerHeath from './routes/healthCheck.js'
import routerFInd from './routes/login/getThatUser.js'
import routerMe from './routes/login/me.js'
import routerJson from './routes/resumos/jsonResu.js'
import routeresu from './routes/resumos/createResu.js'
import routerFindResu from './routes/resumos/showResu.js'
/* aura 67 express necessidades */
const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(cookieParser())
app.use(errorCheck)
dotenv.config(); 

const $PORT = process.env.PORT || 3000;

/* rota */
app.get("/", (req, res  ) => res.send("home"));
app.use('/', routerResu)
app.use('/', routerChat)
app.use('/', routerUser)
app.use('/', routerCadastro)
app.use('/', routerLogin)
app.use('/', routerHeath)
app.use('/', routerFInd)
app.use('/', routerMe)
app.use('/', routerJson)
app.use('/', routeresu)
app.use('/', routerFindResu)

app.listen($PORT, () => {
    console.log('********************************************************************')
    console.log('*                                                                  *')
    console.log('*                                                                  *')
  console.log(
    `*My freaking horny API is running here in the ${$PORT} port, be happy  *`,
  );
  console.log('*                                                                  *')
  console.log('*                                                                  *')
  console.log('********************************************************************')
});
