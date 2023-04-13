import express from 'express';
import cors from 'cors';
import userRouter from './routers/user.router.js';


const server = express()
server.use(cors())
server.use(express.json())
const routerList = [userRouter]
server.use(routerList)

const PORT = 5000
server.listen(PORT, () => console.log(`O server está rodando na porta ${PORT}`))