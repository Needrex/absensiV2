import express from "express"
import { getUser, getUserbyID, inputUser, deleteUser, updateUser } from "../controllers/userController.js"
import { UserModel } from "../model/userModel.js"
import { authorize } from "../../middleware/role.js"

const routeUser = express.Router()

routeUser.param('id', async (req, res, next, value) => {
   try {
      const findData = await UserModel.findById(value)

      if (findData === null) {
         const err = new Error("Id tidak di temukan")
         err.statusCode = 400
         next(err)
      } else {
         next()
      }
   } catch (e) {
      const err = new Error("Id tidak di temukan")
      err.statusCode = 400
      next(err)
   }
})

routeUser.route('/')
   .get(authorize('user'), getUser)
   .post(authorize('user'), inputUser)

routeUser.route('/:id')
   .get(authorize('user'), getUserbyID)
   .delete(authorize('user'), deleteUser)
   .patch(authorize('user'), updateUser)


export { routeUser }
