import joi from "joi"

const messageSchema = joi.object({
    to: joi.string().required(),
    text: joi.string().required(),
    type: joi.string().valid('message', 'private_message').required(),
    time: joi.string().required(),
})

export default messageSchema;
