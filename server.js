import { app } from './src/app.js'

const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`RUN IN http://localhost:${PORT}/`)
})