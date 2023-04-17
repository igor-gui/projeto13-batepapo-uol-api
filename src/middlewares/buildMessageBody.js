
export default function buildMessageBody(req, res, next){
    const { body } = res.locals;
        const message =
        {
            ...body,
            ...req.body,
            time: dayjs(Date.now()).format("HH:mm:ss")
        }
        res.locals.finalBody = message;
        next()
}