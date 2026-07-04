
/* Bibliotequitas */
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { PDFParse } from 'pdf-parse';
import fs from 'fs'
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import axios from 'axios';

/* aura 67 express necessidades */
const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(process.env.APIAI || process.env.PORT || "abc")
const $PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.send("home"))

app.post('/resu', async (req, res) => {
    const storage = multer.diskStorage(
        {
            destination: (req, file, cb) => {
                cb(null, `${__dirname}/public`)
            }, 
            filename: (req, file, cb) => {
                cb(null, Date.now() + '.pdf');  
            }
        }
    )

    const upload = await multer({ storage }).single("file");

    upload(req, res, (err) => {
        if(err instanceof multer.MulterError){
            return res.status(500).send({code: err.code, message: err.message, field: err.field})
        } else if(err){
            return res.status(500).send({message: err.message})
        }

        console.log(req.file.filename)
        return res.status(200).send({ upload: "uploado realizado"})
    })

})

// olha esse app listen tesudo  
app.listen($PORT, () => {
    console.log(`My freaking horny API is running here in the ${$PORT} port, be happy`)
})