export const respons = (res, statusCode, data, message) => {
   res.json(statusCode, [
      {
         payload: data,
         message,
         meta: [

         ]
      }
   ])
}