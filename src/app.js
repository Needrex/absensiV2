import express from "express"
import { } from "../config/koneksi.js"
import { routePublic } from "./routes/publicRoute.js"
import { routeUser } from "./routes/userRoute.js"
import { errorHandler } from "../middleware/errorHandler.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { cekToken } from "../middleware/cekToken.js"


const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()

app.use('/needrex/v1', routePublic)
app.use(cekToken)
app.use('/needrex/v1', routeUser)
app.use(errorHandler)

export {
   app
}