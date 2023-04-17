import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getMessages, postMessage } from "../controllers/messages.controller.js";
import messageSchema from "../schemas/message.schema.js";
import checkUser from "../middlewares/checkUser.js";
import buildMessageBody from "../middlewares/buildMessageBody.js";
import filterMessages from "../middlewares/filterMessages.js";


const router = Router()

router.post('/messages', validateSchema(messageSchema), checkUser, buildMessageBody, postMessage)
router.get('/messages', filterMessages, getMessages)

export default router
