import jwt from "jsonwebtoken"
import ServiceUser from "../services/user.js"

const JWTsegredo = "aboba"

export default async function authMiddleware(req, res, next) {

    const token = req.headers['authorization']
    console.log(req.headers['authorization'])
    try {
        if (!token) {
            throw new Error("nao tem token");

        }
        const decoded = jwt.verify(token.split(' ')[1], JWTsegredo)

        const user = await ServiceUser.FindOne(decoded.id)

        req.headers.user = user
        next()
    } catch (error) {
        res.status(403).send({
            data: null,
            msg: error.message,
            error: true
        })
    }



}
