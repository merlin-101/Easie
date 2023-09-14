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
	const sql_query = 'SELECT * FROM Utilizadores';
	data_base.query(sql_query, (err, results) => {
		if (err) {
			console.error('Falha na query da base de dados:', err);
			res.status(500).json({ error: 'Erro na base de dados' });
		} else {
			res.json(results);
		}
	});
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
  console.log(req.body)

  return res.json(JSON.stringify({ pedido: 'Sucesso', request: req.body }))
})



connections.get('/api/cartoes', (req, res) => {
  res.json(cartoes)
})


const cartoes = [
  {
    CardID: 1,
    Titulo: "Facebook",
    Descricao: "Facebook's page",
    tipo: "Social Media",
    Ligacao: "https://www.facebook.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 2,
    Titulo: "Youtube",
    Descricao: "Youtube's page",
    tipo: "Social Media",
    Ligacao: "https://www.youtube.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 3,
    Titulo: "CNN",
    Descricao: "CNN's page",
    tipo: "News",
    Ligacao: "https://www.cnn.com",
    UserID: 1,
    Notif: false,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 4,
    Titulo: "Family Dinner",
    Descricao: "Today at 20:00",
    tipo: "",
    Ligacao: "",
    UserID: 1,
    Notif: true,
    timer: "12-09-2023 16:43",
  },
  {
    CardID: 5,
    Titulo: "Reminder",
    Descricao: "Just a reminder for dinner",
    tipo: "",
    Ligacao: "",
    UserID: 1,
    Notif: true,
    timer: "12-09-2023 19:17",
  },
];


connections.listen( port, () => {
	console.log(`O servidor está a correr na port ${port}`);
});