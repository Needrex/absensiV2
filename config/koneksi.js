import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: './config/.env' })

const { DATABASE, URL_DATABASE } = process.env

try {
   mongoose.connect(URL_DATABASE + DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   console.log('RUN DATABASE')
} catch (error) {
   console.log('ERROR DATABASE')
   throw error
}
