import transporter from "../configs/node-mailer.config.js"

export function gererateOTP(){
    return Math.floor(1000 + Math.random() * 9000)
}

export async function OTP_sender(OTP,receiverEmail){
    let info = await transporter.sendMail({
        from: ``,
        to: receiverEmail,
        subject: 'OTP',
        text: `YOUR OTP: ${OTP}`
    })
    console.log(info.accepted)
}