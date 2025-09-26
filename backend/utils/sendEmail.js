const nodemailer = require("nodemailer");

require('dotenv').config();

const sendEmail = async({to,subject,html})=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        },
    })

    const mailOptions = { from: '"Vahaan Bazaar" <no-reply@vahaanbazaar.com>', to, subject, html };

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
