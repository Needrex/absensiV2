import { validationLogin, validationRegis } from "../validations/publicValidation.js"
import bcrypt from "bcrypt"
import { Modelpublic } from "../model/modelPublic.js"
import { ResponError } from "../utils/responError.js"
import { registerValid, loginValid } from "../validations/validatePublic.js"

export const register = async (req) => {
   const user = await registerValid(validationRegis, req)
   user.password = await bcrypt.hash(user.password, 10)

   const data = new Modelpublic(user)
   const resultData = await data.save()

   return resultData
}

export const login = async (req) => {
   const user = await loginValid(validationLogin, req)

   const username = user.username
   const email = user.email
   const password = user.password

   const findData = await Modelpublic.findOne({ username: username, email: email })

   if (!findData) {
      throw new ResponError(400, "password dan username salah")
   } else {
      const cekData = await bcrypt.compare(password, findData.password)
      if (cekData === false) {
         throw new ResponError(400, "password dan username salah")
      }
   }

   return findData
}