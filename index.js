import express from 'express'
import cliente from './router/cliente.js'
import database from './config/database.js'

const app = express()

app.use(express.json())

app.use("/api/v1/cliente", cliente)

database.db
    .sync({ force: false })
    .then((_) => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })

    })
        .catch((e) => {
            console.log(e)
        })
