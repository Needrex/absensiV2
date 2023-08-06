import { validate } from "../validations/validateUser.js"
import { validationInput, validationUpdate } from "../validations/userValidation.js"
import { UserModel } from "../model/userModel.js"


export const userInput = async (req) => {
   const dataMentah = await validate(validationInput, req)
   const cekData = UserModel.findOne({ alamat: dataMentah.alamat, nomorHp: dataMentah.nomorHp, pekerjaan: dataMentah.pekerjaan })

   if (cekData !== null) {
      const err = new Error(cekData)
      err.statusCode = 401

      throw err
   }

   const data = new UserModel(dataMentah)
   const resultData = await data.save()

   return resultData
}

export const userDelete = async (req) => {
   const deleteUser = await UserModel.findByIdAndDelete(req)

   if (deleteUser == null) {
      const err = new Error('Gagal menghapus data')
      err.statusCode = 400
      throw err
   }

   return deleteUser
}

export const userUpdate = async (req) => {
   const data = await validate(validationUpdate, req)
   const cekData = await UserModel.findOne({ $or: [{ nomorHp: data.nomorHp }, { alamat: data.alamat }, { pekerjaan: data.pekerjaan }] })

   if (cekData != null) {
      const err = new Error("Data duplikat")
      err.statusCode = 401

      throw err
   }

   const resultData = await UserModel.updateOne(data)
   return resultData
}


// {
//    "nomorHp": "089566215686",
//       "alamat": "Tapos-depok",
//          "pekerjaan": "Kariyawan"
// }

