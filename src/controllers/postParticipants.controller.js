import { participants } from "../config/collections.database.js";

export async function postParticipant(req, res) {
    const { name } = req.body;
    try {
        await participants.insertOne({name, lastStatus: Date.now()})
        return res.status(200).send()
    }
    catch (err){
        console.error(err)
    }
}