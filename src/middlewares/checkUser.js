import { participants } from "../config/collections.database.js"

export default async function checkUser(req, res, next) {
    const User = req.headers.user
    console.log(User)
    if (!User) {
        return res.status(422).send("User inválido")
    }
    try {
        const user = await participants.findOne({name: User})
        if(!user){
            res.status(422).send("Usuário não cadastrado")
        }
    }
    catch (err) {
        console.error(err)
        res.sendStatus(422)
    }
    res.locals.body = { from: User }
    next()
}