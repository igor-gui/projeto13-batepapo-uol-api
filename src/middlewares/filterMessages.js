import { messages } from "../config/collections.database.js";

export default async function filterMessages(req, res, next) {
    const { user } = req.headers;
    const query = {
        $or: [
            { to: user },
            { from: user },
            { to: 'Todos' }
        ]
    }
    try {
        const messagesToSend = await messages.find(query).toArray()
        res.locals.body = messagesToSend;
    } catch (err) {
        console.error(err)
        return res.sendStatus(422)
    }
    next()
}