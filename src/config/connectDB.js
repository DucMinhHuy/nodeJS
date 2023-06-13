import mysql from 'mysql2/promise';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ducminhhuy',
    database: 'anhhuy'
});

export default pool;