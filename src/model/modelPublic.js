import mongoose from "mongoose"

const schemaContact = new mongoose.Schema({
   nama: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   username: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   userRole: {
      type: String,
      required: true
   }

}, {
   versionKey: false
})

export const Modelpublic = mongoose.model('user', schemaContact)
