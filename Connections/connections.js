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
<<<<<<< HEAD
	const sql_query = 'SELECT * FROM your_table';
	data_base.query(sql_query, (err, results) => {
		if (err) {
			console.error('Falha na query da base de dados:', err);
			res.status(500).json({ error: 'Erro na base de dados' });
		} else {
			res.json(results);
		}
	});
});

connections.listen( port, () => {
	console.log(`O servidor está a correr na port ${port}`);
});

const sql_query = 'SELECT * FROM Utilizadores'
=======
  console.log(req)
  const sql_query = 'SELECT * FROM Utilizadores'
>>>>>>> f9714be31b738a358e5fd7e65cf9e22feeb0701b
  console.log('Ex: SELECT * FROM Utilizadores')
  data_base.query(sql_query, (err, results) => {
    if (err) {
      console.error('Falha na query da base de dados:', err)
      res.status(500).json({ error: 'Erro na base de dados' })
    } else {
      res.json(results)
    }
  });

async function onCreate(event) {
  let fu = event.body
  const reader = fu
  /*let result = ''
  const decoder = new TextDecoder()

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    result += decoder.decode(value)
  }*/

  console.log(reader)
}

connections.post('/api/data', (req, res) => {
<<<<<<< HEAD
=======
  //console.log(req)
  //onCreate(req)
  if (req.body == undefined) {
    console.log('vazio')
  }
  //console.log(req)
>>>>>>> f9714be31b738a358e5fd7e65cf9e22feeb0701b
  console.log(req.body)

  return res.json(JSON.stringify({ pedido: 'Sucesso', request: req.body }))
})

connections.listen(port, () => {
  console.log(`O servidor está a correr na port ${port}`)
})
