import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
   nomorHp: {
      type: String,
      required: true
   },
   alamat: {
      type: String,
      required: true
   },
   pekerjaan: {
      type: String,
      required: true
   }
}, {
   versionKey: false
})

export const UserModel = mongoose.model('dataUser', userSchema)