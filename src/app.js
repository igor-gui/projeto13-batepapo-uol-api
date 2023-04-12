import express from 'express';
import cors from 'cors';


const server = express()
server.use(cors())
server.use(express.json())




const PORT = 5000
server.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`))