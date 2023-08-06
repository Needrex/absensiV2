import Joi from "joi"
import { cekNomorTlp } from "../utils/cekNomorTelepon.js"

export const validationInput = Joi.object({
   nomorHp: Joi.string().required().custom((value, helper) => {
      const cekNomorTelepon = cekNomorTlp(value)
      if (cekNomorTelepon === null) {
         helper.message('Nomor yang anda masukan salah')
      } else {
         return cekNomorTelepon
      }
   }),
   alamat: Joi.string().required().min(10),
   pekerjaan: Joi.string().required()
})

export const validationUpdate = Joi.object({
   nomorHp: Joi.string().custom((value, helper) => {
      const cekNomorTelepon = cekNomorTlp(value)
      if (cekNomorTelepon === null) {
         helper.message('Nomor yang anda masukan salah')
      } else {
         return cekNomorTelepon
      }
   }),
   alamat: Joi.string().min(10),
   pekerjaan: Joi.string()
})