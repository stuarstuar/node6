
const enviar = require('./nodemailer')
const url = require('url')
const http = require('http')
const fs = require('fs')

http
    .createServer(function (req, res) {
        let {
            para,
            asunto,
            contenido
        } = url.parse(req.url, true).query

        if (req.url == '/') {
            
            res.setHeader('content-type', 'text/html')
            fs.readFile('index.html', 'utf8', (err, data) => {
                res.end(data)
            })
        }
        
        if (req.url.startsWith('/correos')) {

            if(para = null){

                res.end(console.log("TAMALO"))
            }
            
            else{

                enviar(para, asunto, contenido)

            }
        }
    })
    .listen(3000)

/*
http
    .createServer(function (req, res) {
    
        let {
            para,
            asunto,
            contenido
        } = url.parse(req.url, true).query
        
        if (req.url.startsWith('/')) {
            enviar(para, asunto, contenido)
            
            res.end(
                `Se procedió a intentar mandar el correo electrónico... revise su
                bandeja de entrada para confirmar que se haya enviado.`
                )
                
        }
    })
.listen(3000)

*/