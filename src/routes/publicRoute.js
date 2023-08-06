import express from "express"
import { registerUser, loginUser } from "../controllers/publicController.js"

const routePublic = express.Router()
routePublic.post('/register', registerUser)
routePublic.post('/login', loginUser)

export { routePublic }
