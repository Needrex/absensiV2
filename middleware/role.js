

export const authorize = (role) => {

   return function (req, res, next) {
      const { userRole } = req.tokenValue
      console.log(req.tokenValue);
      if (userRole == role) {
         next()
      } else {
         const err = new Error('Role anda tidak sesuai')
         err.statusCode = 401

         throw err
      }
   }
}