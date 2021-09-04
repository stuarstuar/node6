const nodemailer = require('nodemailer')
module.exports = enviar

function enviar(to, subject, text) {

    // Crea el q envía 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nasho16101999@gmail.com',
            pass: 'perrosfalderos',
        },
    })
    // Objeto con opciones 
    let mailOptions = {
        from: 'nasho16101999@gmail.com',
        to,
        subject,
        text,
    }
    // Envía y el objeto de opciones
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) console.log(err)
        if (data) console.log(data)
    })
}
