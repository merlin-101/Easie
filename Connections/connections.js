const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql2');

const connections = express();
const port = process.env.port || 3000;

//cria a connexão com o mysql
const data_base = mysql.createConnection({

	host: '127.0.0.1',
	user: 'root',
	password: 'your_password',
	database: 'your_database'
});

//se ocorrer um erro de ligação com a base de dados
data_base.connect(err => {

	if (err){
		console.error('Erro na connectividade com a base de dados:', err);
		return;
	}
	console.log('Connectado com a base de dados');
});

//as routes do API, filtrações, buscas etc
connections.get('/api/data', (req, res) => {

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
	console.log('O servidor está a correr na port ${port}');
});

