import express from 'express'
const app = express()
const port = 3090

app.get('/', (req, res) => {
    res.send('Ola mundo!')
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
