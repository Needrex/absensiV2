import { ResponError } from "../utils/responError.js"
import { Modelpublic } from "../model/modelPublic.js"

export const registerValid = async (validationPublic, req) => {

   const user = validationPublic.validate(req)

   const findUser = await Modelpublic.findOne({ username: req.username })

   if (user.error) {
      throw new ResponError(400, user.error.details[0].message)
   } else if (findUser != null) {
      throw new ResponError(400, 'Akun duplikat')
   } else {
      return user.value
   }
}

export const loginValid = async (validationUser, req) => {
   const user = validationUser.validate(req)

   if (user.error) {
      throw new ResponError(400, user.error.details[0].message)
   } else {
      return user.value
   }
}