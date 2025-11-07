import mysql from 'mysql2/promise';


const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_kasir',
});

export default connection