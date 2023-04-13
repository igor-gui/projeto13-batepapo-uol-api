import { Router } from "express";
import { getParticipants, postParticipant } from "../controllers/participants.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { participantSchema } from "../schemas/participant.schema.js";


const router = Router()



router.post('/participants', validateSchema(participantSchema), postParticipant)
router.get('/participants', getParticipants)
export default router