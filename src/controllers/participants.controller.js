import { participants } from "../config/collections.database.js";

export async function postParticipant(req, res) {
    const { name } = req.body;
    try {
        await participants.insertOne({ name, lastStatus: Date.now() })
        return res.status(201).send('Usuário Cadastrado')
    }
    catch (err) {
        console.error(err)
    }
}

export async function getParticipants(req, res) {
    try {
        const partList = await participants.find().toArray();
        if(!partList) partList = []
        return res.send(partList)
    }
    catch (err) {
        console.error(err)
    }
}