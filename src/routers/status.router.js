import { Router } from "express";
import validateStatus from "../middlewares/validateStatus.js";

const router = Router()

router.post('/status', validateStatus)