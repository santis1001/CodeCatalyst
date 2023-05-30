const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    port: '3305',
    password: '3b9212b26c7fe4f4609fe1b2ecfa949959b1770ae090f7c4d602673e4b3b613d',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  
  console.log(CreateTable(results));
  console.log("err: " + err);

});

function CreateTable(jsonData) {
  const Table = require('cli-table');
  const headers = Object.keys(jsonData[0]);
  const table = new Table({
    head: headers
  });

  jsonData.forEach(person => {
    const rowData = headers.map(header => person[header]);
    table.push(rowData);
  });
  return table.toString();
}

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
