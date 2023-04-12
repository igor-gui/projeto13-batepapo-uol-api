import { Router } from "express";
import { postParticipant } from "../controllers/postParticipants.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { participantSchema } from "../schemas/participant.schema.js";


const router = Router()



router.post('/participants', validateSchema(participantSchema), postParticipant)