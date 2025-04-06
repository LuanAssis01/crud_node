import "dotenv/config"
import mysql from "mysql2"

const conn = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

export default conn