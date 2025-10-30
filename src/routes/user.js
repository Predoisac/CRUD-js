import express from "express"
import ControllerUser from "../controllers/user.js"

const router = express.Router()

//api v1
router.get("/users", ControllerUser.FindAll)
router.get("/user/:id", ControllerUser.FindOne)
router.post("/user", ControllerUser.Create)
router.put("/user/:id", ControllerUser.Update)
router.delete("/user/:id", ControllerUser.Delete)

export default router