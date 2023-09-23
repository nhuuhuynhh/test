import express from "express"
import homeController from "../controllers/HomeController"
import aboutController from "../controllers/AboutController"
import userController from "../controllers/UserController"

const router = express.Router()

const initWebRoutes = (app) => {
    router.get("/home", homeController.homePage)

    router.get("/about", aboutController.aboutPage)

    router.get("/create-new-user", userController.newUser)

    router.get("/list-user", userController.listUser)
    router.get("/detail-user/:user", userController.detailUser)

    router.get("*", (req, res) => {
        return res.send("404 not found")
    })

    return app.use("/" ,router)
}

// nhap /about server -> response -> "home"

module.exports = initWebRoutes