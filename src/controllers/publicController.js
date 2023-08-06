import { respons } from "../utils/respons.js"
import jwt from "jsonwebtoken"
import { login, register } from "../utils/public-service.js"
import dotenv from "dotenv"
dotenv.config({ path: '../config/.env' })

export const registerUser = async (req, res, next) => {
   try {

      const resultData = await register(req.body)

      if (resultData !== null) {
         respons(res, 200, resultData, "Berhasil register")
      } else {
         const err = new Error('Gagal register')
         err.statusCode = 400
         next(err)
      }

   } catch (e) {
      next(e)
   }
}

export const loginUser = async (req, res, next) => {
   try {
      const findData = await login(req.body)

      if (findData !== null) {
         const token = jwt.sign({
            userId: findData.id,
            email: findData.email,
            nama: findData.nama,
            username: findData.username,
            userRole: findData.userRole
         }, process.env.TOKEN, {
            expiresIn: '1h'
         })

         res.cookie("tkt", token, {
            expires: new Date("20 07 2023"),
            secure: true,
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 5000
         })

         respons(res, 200, {
            nama: findData.nama,
            username: findData.username,
            email: findData.email,
            token: token
         })
      }
   } catch (e) {
      next(e)
   }
}