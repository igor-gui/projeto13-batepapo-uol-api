import { messages } from "../config/collections.database.js";

export async function postMessage(req, res) {
    const { finalBody } = res.locals;
    try {
        await messages.insertOne(finalBody);
        const allMessages = await messages.find().toArray();
        return res.status(201).send(allMessages)

    } catch (err) {
        console.error(err)
        return res.sendStatus(422)
    }
}

export async function getMessages(req, res) {
    const { body } = res.locals
    return res.send(body)
}