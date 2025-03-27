/* -----------IMPORTS----------------- */
import transporter from '../configs/node-mailer.config.js';
import xlsx from 'xlsx';
import pLimit from 'p-limit';
import {configDotenv} from 'dotenv'
configDotenv()

const Sender = async (receiver,senderEmail,pdfFile) => {
    try {
        let info = await transporter.sendMail({
            from: `Codemap, ${senderEmail}`,
            to: receiver.email,
            subject: 'Codemap Service',
            text: 'Information',
            html: '<b>Information</b>',
            attachments:[
                {
                    filename: pdfFile.name, // file name
                    content: pdfFile.data, // file data in buffer format
                    contentType: pdfFile.mimetype, // Correct Media type
                }
            ]
        });
        console.log(`Email send to ${receiver.email}: `, info.response);    
    } catch (err) {
        console.log(`Failed to send receiver to ${receiver.email}`,err.message)
    }
}

/* --------------- Limit ---------------*/
const limit = pLimit(20);

/* ----------- Sending Mails ----------- */
async function SendingMails(Exfile,pdfFile,senderEmail){
    const file = xlsx.readFile(Exfile)
    const f_sheet_name = file.SheetNames[0]
    const sheet = file.Sheets[f_sheet_name]
    const Customers = xlsx.utils.sheet_to_json(sheet)
    await Promise.all(Customers.map(cust => limit(()=> Sender(cust,senderEmail,pdfFile))))
    console.log('All Done');
}

export default SendingMails;
