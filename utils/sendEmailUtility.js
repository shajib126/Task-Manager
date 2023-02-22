const nodemailer = require('nodemailer')

const sendEmailUtility = async(emailTo,emailText,emailSubject)=>{
    console.log(emailTo,emailText,emailSubject);
    let transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        PORT:process.env.SMTP_PORT,
        secure:false,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        },tls:{
            rejectUnauthorized:false
        }
    })

    let mailOptions ={
        from:'Task Manager <shajib@gmail.com>',
        to:emailTo,
        subject:emailSubject,
        text:emailText
    }
    return await transporter.sendMail(mailOptions)
}

module.exports = sendEmailUtility