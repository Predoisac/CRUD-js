import express from "express"
import ControllerUser from "../controllers/user.js"

const router = express.Router()

//api v1
router.get("/users", ControllerUser.FindAll)
router.get("/user/:index", ControllerUser.FindOne)
router.post("/user", ControllerUser.Create)
router.put("/user/:index/:nome", ControllerUser.Update)
router.delete("/user/:index", ControllerUser.Delete)

export default router