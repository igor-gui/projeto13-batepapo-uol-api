export default async function checkUser(req, res, next) {
    const { User } = req.headers
    if (!User) {
        return res.sendStatus(422)
    }
    res.locals.body = { User }
    next()
} 