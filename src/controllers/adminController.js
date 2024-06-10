import { respons } from "../utils/respons.js"
import { Modelpublic } from "../model/modelPublic.js"

const getData = async (req, res, next) => {
   try {
      const data = await Modelpublic.find()
      respons(res, 200, data, "Berhasil menampilkan data")
   } catch (e) {
      next(e)
   }
}

const getDataByUsername = async (req, res, next) => {
   try {
      const { username } = req.body
      const data = await Modelpublic.findOne({ username: username })

      respons(res, 200, data, "Berhasil mendapatkan data")
   } catch (e) {
      next(e)
   }
}


export {
   getData,
   getDataByUsername
}