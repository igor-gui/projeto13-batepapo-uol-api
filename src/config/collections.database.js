import db from "./chat.database.js";

export const participants = db.collection('participants')
export const messages = db.collection('messages')