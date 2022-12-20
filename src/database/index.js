require('dotenv').config();

const {Client} = require('pg');

const client = new Client({
  host: process.env.HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB
});

client.connect();

exports.query = async (query,values)=>{
  const {rows} = await client.query(query,values);//recebemos alem da query, o valor dos binds
  return rows;
}


