import express from "express"
import {
   getData,
   getDataByUsername
} from "../controllers/adminController.js"
import { Modelpublic } from "../model/modelPublic.js"
import { authorize } from "../../middleware/role.js"

const routeAdmin = express.Router()

routeAdmin.param('id', async (req, res, next, value) => {
   try {
      const findData = await Modelpublic.findById(value)

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

routeAdmin.route('/')
   .get(authorize('admin'), getData)
   .post(authorize('admin'), getDataByUsername)

routeAdmin.route('/:id')
// .get(getUserbyID)
// .delete(deleteUser)
// .patch(updateUser)


export { routeAdmin }
