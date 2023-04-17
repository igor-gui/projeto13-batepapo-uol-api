import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

try {
    await mongoClient.connect()
    console.log("Banco de dados conectado com sucesso!")
}
catch (err) {
    console.error(err)
}
const db = mongoClient.db()

export default db;

