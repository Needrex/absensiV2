import { ResponError } from "../utils/responError.js"

export const validate = async (validation, req) => {
   const validate = validation.validate(req)

   if (validate.error) {
      throw new ResponError(400, validate.error.details[0].message)
   } else {
      return validate.value
   }
}
