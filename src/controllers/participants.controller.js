import { messages, participants } from "../config/collections.database.js";

export async function postParticipant(req, res) {
    const { body, message } = res.locals;
    try {
        await participants.insertOne(body)
        await messages.insertOne(message)
        return res.status(201).send('Usuário Cadastrado')
    }
    catch (err) {
        console.error(err)
    }
}

export async function getParticipants(req, res) {
    try {
        const partList = await participants.find().toArray();
        if (!partList) partList = []
        return res.send(partList)
    }
    catch (err) {
        console.error(err)
    }
}