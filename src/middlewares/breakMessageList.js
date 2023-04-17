import { messages } from "../config/collections.database.js";

export default async function breakMessageList(req, res, next) {
    const limit = Number(req.query.limit);
    let { body } = res.locals;

        if (limit) {
            const lastMessages = body.slice(-limit);
            res.locals.body = lastMessages;
        }
    next()
}