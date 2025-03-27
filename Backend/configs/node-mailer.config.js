/* ----- NODE MAILER TRANSPORTER AND SENDER ----- */
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS,
    }
})

export default transporter;