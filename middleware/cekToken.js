import jwt from "jsonwebtoken"

export const cekToken = (req, res, next) => {
   const token = req.cookies.tkt

   if (token) {
      const resultToken = jwt.verify(token, process.env.TOKEN)
      if (resultToken) {
         req.tokenValue = resultToken
         next()
      } else {
         const err = new Error('Token gagal di akses')
         err.statusCode = 401
         next(err)
      }
   } else {
      const err = new Error('Token tidak tersedia')
      err.statusCode = 401
      next(err)
   }
}