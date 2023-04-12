import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;
try {
    await mongoClient.connect()
    db = mongoClient.db()
    console.log("Banco de dados conectado com sucesso!")
}
catch (err) {
    console.error(err)
}

export default db;

