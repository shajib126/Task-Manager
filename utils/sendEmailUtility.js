const nodemailer = require('nodemailer')

const sendEmailUtility = async(emailTo,emailText,emailSubject)=>{
    console.log(emailTo,emailText,emailSubject);
    let transporter = nodemailer.createTransport({
        host:'smtp.ethereal.email',
        PORT:587,
        secure:false,
        auth:{
            user:'adriel.white4@ethereal.email',
            pass:'5cDe3aDS9UEASAnSDk'
        },tls:{
            rejectUnauthorized:false
        }
    })

    let mailOptions ={
        from:'Task Manager <shajib126@gmail.com>',
        to:emailTo,
        subject:emailSubject,
        text:emailText
    }
    return await transporter.sendMail(mailOptions)
}

module.exports = sendEmailUtility