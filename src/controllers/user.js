import ServiceUser from "../services/user.js"

class ControllerUser {
    FindAll(_, res) {
        try {
            const resultado = ServiceUser.FindAll()

            res.send({nomes: resultado})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    FindOne(req, res) {
        try {
            const index = req.params.index
            const resultado = ServiceUser.FindOne(index)

            res.send({nome: resultado})
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    Create(req, res) {
        try {
            const nome = req.body.nome
            const resultado = ServiceUser.Create(nome)

            res.send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    Update(req, res) {
        try {
            const index = req.params.index
            const nome = req.body.nome
            const resultado = ServiceUser.Update(index, nome)

            res.status(201).send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
    Delete(req, res) {
        try {
            const index = req.params.index
            const resultado = ServiceUser.Delete(index)

            res.status(204).send(resultado)
        } catch (error) {
            res.status(500).send(error.message)
        }

    }
}

export default new ControllerUser()