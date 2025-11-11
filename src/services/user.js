import jwt from "jsonwebtoken"
import User from "../models/user.js"

const JWTsegredo = "aboba"

class ServiceUser {
    async FindAll() {
        const user = await User.findAll()

        return user
    }
    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o id")
        }
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("user não encontrado")
        }

        return user
    }
    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error("Preenche todos os campos")
        }

        await User.create({
            nome, email, senha, ativo
        })
    }
    async Update(id, nome, email, senha, ativo) {
        if (!id) {
            throw new Error("Favor informar o id")
        }
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("user não encontrado")
        }

        user.nome = nome
        user.email = email
        user.senha = senha
        user.ativo = ativo

        await user.save()
    }
    async Delete(id) {
        if (!id) {
            throw new Error("Favor informar o id")
        }
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("user não encontrado")
        }

        await user.destroy()
    }

    async Login(email, senha) {
        const user = await User.findOne({ where: { email } })

        if (!user || !senha) {
            throw new Error("Email ou senha inválidos");
        }
        
        return jwt.sign({id: user.id, nome: user.nome}, JWTsegredo, {expiresIn: 60 * 60})
    }
}
export default new ServiceUser()