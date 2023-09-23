import express from "express"
import dotenv from "dotenv"
dotenv.config()
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/webRoute"

const app = express()

configViewEngine(app)

initWebRoutes(app)

const port = process.env.PORT || 4444
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})