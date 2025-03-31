import express from 'express';
import { upload } from '../middlewares/multer.m-ware.js';
import transporter from '../configs/node-mailer.config.js';
import { configDotenv } from 'dotenv';
import { isLoggedin } from '../middlewares/isLoggedin.m-ware.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

configDotenv()

const sender = async (email, receiverEmail, subject, text,file) => {
    console.log('Working', email, receiverEmail,subject,text,file)
    let info = await transporter.sendMail({
        from: `${email}`,
        to: receiverEmail,
        subject: subject,
        text: text,
        attachments:[
            {
                filename: "Receipt",
                content: file,
                contentType: "text/plain",
            }
        ]
    })
    console.log(info.accepted)
}

const Receipt_route = express.Router()

Receipt_route.post('/',isLoggedin,async (req,res)=>{
    const {R_email, subject, text} = req.body;
    try {
        const filepath = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(filepath)
        const receipt = path.join(__dirname, 'receipt.txt')
        console.log(receipt)
        let file = fs.readFileSync(receipt)
        await sender(req.admin.email, R_email, subject, text,file);
        res.status(201).json({success: true, Message: 'Email has been sent successfully'});
    } catch (error) {
        res.status(500).json({Message: 'Server Error',error: error.message});
    }
})

export default Receipt_route