import express from "express"
import { registerUser, loginUser, logoutUser } from "../controllers/publicController.js"

const routePublic = express.Router()
routePublic.post('/register', registerUser)
routePublic.post('/login', loginUser)
routePublic.delete('/logout', logoutUser)

export { routePublic }
