import { phone } from "phone"

export const cekNomorTlp = (nomorTlp) => {
   const cekNomor = phone(nomorTlp, { country: 'ID' })

   if (cekNomor.isValid) {
      return cekNomor.phoneNumber
   } else {
      return null
   }
}