const express = require('express');

const app = express();

const PORT = 3030;

const {Client} = require('pg');

const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '',
    database: 'supriadisql'
});

client.connect()
    .then(() => console.log('Connected to PostgresSQL'))
    .catch(err => console.error('Connection error', err.stack));



const createTableQuery =`
    CREATE TABLE pengguna (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT null,
        email VARCHAR(100) UNIQUE NOT null,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;



client.query(createTableQuery)
    .then(res => {
        console.log('Table created successfully');
        })
    .catch(err => {
        console.error('Error creating table', err.stack);
        })
    .finally(() => {
        client.end();
        });



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is successfully Running, and App is listening on part "+ PORT)
    else
    console.log("error", error);
}
)