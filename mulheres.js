const express = require('express')
const router = express.Router()

const app = express()

const porta = 3333
const mulheres = [
    {
        nome: "Michelle Dias",
        imagem: "teste",
        minibio: "Programadora"
    },
    {
        nome: "Giovanna Padilha",
        imagem: "teste",
        minibio: "Enfermeira"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta ' , porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)