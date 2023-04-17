import dayjs from "dayjs"
import { participants } from "../config/collections.database.js"

export default async function userValidation(req, res, next) {
    const { name } = req.body

    try {
        const alreadyExists = await participants.findOne({ name })
        if (!alreadyExists) {
            res.locals.body = { name, lasStatus: Date.now() }
            res.locals.message = { 
                from: name,
                to: 'Todos',
                text: 'entra na sala...',
                type: 'status',
                time: dayjs(Date.now()).format("HH:mm:ss")
        }
        return next()
        }
        return res.status(409).send({message: "Usuário Já cadastrado"})
    }
    catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
}