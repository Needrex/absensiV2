import { ResponError } from "../src/utils/responError.js"

export const errorHandler = async (err, req, res, next) => {
   if (!err) {
      next()
   }

   if (err instanceof ResponError) {
      res.status(err.statusCode).json({
         status: "Bad Request",
         message: err.message,
         errors: err.error
      })
   } else {
      err.statusCode = err.statusCode || 500
      switch (err.statusCode) {
         case 400:
            err.status = "Bad Request"
            break;
         case 401:
            err.status = "Unauthorized"
            break;
         case 404:
            err.status = "Not Found"
            break;
         case 500:
            err.status = "Server Error"
            break;
         default:
            break;
      }

      res.status(err.statusCode).json({
         status: err.status,
         message: err.message,
         errors: err.stack
      })
   }

   next()
}