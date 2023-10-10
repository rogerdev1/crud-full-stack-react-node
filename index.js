const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crud_full_stack'
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

    res.send('Pagina Inicial CRUD Full Stack')
})

app.get('/getCards', (req, res) => {

    let query = `SELECT * FROM crud`

    db.query(query, (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})

app.post('/cadastrar', (req, res) => {
    const { nome, preco, categoria } = req.body;

    let query = `INSERT INTO crud (nome, preco, categoria) VALUES (?,?,?)`

    db.query(query, [nome, preco, categoria], (err, res) => {
        console.log(err)
    })
})

app.put('/atualizar', (req,res) => {
    const {id, nome, preco, categoria} = req.body

    let query = `
        UPDATE crud
        SET nome = ?, preco = ?, categoria = ?
        WHERE id = ?
    `

    db.query(query, [nome, preco, categoria, id], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.body;

    let query = `DELETE FROM crud WHERE id = ?`

    db.query(query, [id], (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(7000, () => console.log('Servidor ligado na porta 7000'))
