import { UserModel } from "../model/userModel.js"
import { respons } from "../utils/respons.js"
import { userDelete, userInput, userUpdate } from "../utils/user-service.js"

export const getUser = async (req, res, next) => {
   try {
      const resultData = await UserModel.find()
      respons(res, 200, resultData, "Berhasil menampilkan data")
   } catch (e) {
      next(e)
   }
}

export const getUserbyID = async (req, res, next) => {
   try {
      const resultData = await UserModel.findById(req.params.id)
      respons(res, 200, resultData, "Berhasil menampilkan data")
   } catch (e) {
      next(e)
   }
}

export const inputUser = async (req, res, next) => {
   try {
      const resultData = await userInput(req.body)

      if (resultData !== null) {
         respons(res, 200, resultData, "Berhasil menginput data")
      } else {
         const err = new Error('Gagal menginput data')
         err.statusCode = 400
         next(err)
      }
   } catch (e) {
      next(e)
   }
}

export const deleteUser = async (req, res, next) => {
   try {
      const resultData = await userDelete(req.params.id)
      respons(res, 200, resultData, "Berhasil menghapus data")
   } catch (e) {
      next(e)
   }
}

export const updateUser = async (req, res, next) => {
   try {
      const resultData = await userUpdate(req.body)
      respons(res, 200, resultData, "Berhasil mengupdate data")
   } catch (e) {
      next(e)
   }
}