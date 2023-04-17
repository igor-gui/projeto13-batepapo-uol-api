import { participants } from "../config/collections.database.js";

export default async function searchUser(req, res, next) {
    const { user } = req.headers;
    try {
        const usuario = await participants.findOne({name: user});
        
    } catch (err) {
        console.error(err)
        return res.sendStatus(404)
    }
}