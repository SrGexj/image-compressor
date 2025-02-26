const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER || 'root', 
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to database')
})

module.exports = {
    db
}