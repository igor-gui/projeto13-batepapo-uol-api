export default async function validateStatus(req, res, next){
    const {user} = req.headers;
    if(!user) {
        return res.status(404).send("Cadastro Necessário")
    }
    next()
}