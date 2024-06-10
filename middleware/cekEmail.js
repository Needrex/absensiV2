import emailValidator from "email-validator"

export const cekEmail = (email) => {
   const cekEmail = emailValidator.validate(email)

   if (cekEmail) {
      return true
   } else {
      return false
   }
}