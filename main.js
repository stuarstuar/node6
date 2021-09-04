
const enviar = require('./mailer')
const url = require('url')
const http = require('http')
const fs = require('fs')
const axios = require("axios")
const { info } = require('console')



http.createServer(function (req, res) {
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
        
        if (req.url.startsWith('/mailing')) {

           enviar(para, asunto, contenido) 

        }
    })
.listen(3000)

// Función que devuelve los valores de la api 

async function getData() {
        const {
            data
        } = await
        axios.get(`https://mindicador.cl/api`)

        let info = {
            Dolar: `${data.dolar.valor}` ,
            Uf: `${data.uf.valor}` ,
            UTM: `${data.utm.valor}` ,
            Euro: `${data.euro.valor}` ,
        }
        console.log(info)
        return info 
}
getData() 