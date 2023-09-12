const express = require('express')
const res = require('express/lib/response')
const mysql = require('mysql2')
const cors = require('cors')

const connections = express()
const port = process.env.port || 5000
connections.use(cors())
//cria a connexão com o mysql
const data_base = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'pass',
  database: 'mydb',
})

//se ocorrer um erro de ligação com a base de dados
data_base.connect((err) => {
  if (err) {
    console.error('Erro na connectividade com a base de dados:', err)
    return
  }
  console.log('Connectado com a base de dados')
})

//as routes do API, filtrações, buscas etc
connections.get('/api/data', (req, res) => {
  const sql_query = 'SELECT * FROM Utilizadores'
  console.log('Ex: SELECT * FROM Utilizadores')
  data_base.query(sql_query, (err, results) => {
    if (err) {
      console.error('Falha na query da base de dados:', err)
      res.status(500).json({ error: 'Erro na base de dados' })
    } else {
      res.json(results)
    }
  })
})

connections.post('/api/data', (req, res) => {
  //console.log(req)
  console.log(req.body)
  return res.json(JSON.stringify({ pedido: 'Sucesso', request: req.body }))
})

connections.listen(port, () => {
  console.log(`O servidor está a correr na port ${port}`)
})
