import dayjs from "dayjs";
export default function buildMessageBody(req, res, next){
    const { from } = res.locals.body;
    console.log(from)
        const message =
        {
            from,
            ...req.body,
            time: dayjs(Date.now()).format("HH:mm:ss")
        }
        res.locals.finalBody = message;
        next()
}