import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { getMessages, postMessage } from "../controllers/messages.controller.js";
import messageSchema from "../schemas/message.schema.js";


const router = Router()

router.post('/messages', validateSchema(messageSchema), postMessage)
router.get('/messages', getMessages)
