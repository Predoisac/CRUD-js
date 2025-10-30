import ServiceUser from "../services/user.js"

class ControllerUser {
     async FindAll(_, res) {
        try {
            const resultado = await ServiceUser.FindAll()

            res.send({ users: resultado })
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    async FindOne(req, res) {
        try {
            const id = req.params.id
            const resultado = await ServiceUser.FindOne(id)

            res.send({ user: resultado })
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    async Create(req, res) {
        try {
            const {nome, email, senha, ativo} = req.body
            const resultado = await ServiceUser.Create(nome, email, senha, ativo)

            res.status(201).send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const {nome, email, senha, ativo} = req.body
            const resultado = await ServiceUser.Update(id, nome, email, senha, ativo)

            res.status(200).send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            const resultado = await ServiceUser.Delete(id)

            res.status(204).send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
}

export default new ControllerUser()