const nomes = new Array("Mary", "Xande", "Lake")

class ModelUser {
    FindAll() {
        return nomes
    }
    FindOne(index) {
        return nomes[index]
    }
    Create(nome) {
        nomes.push(nome)
    }
    Update(index, nome) {
        nomes[index] = nome
    }
    Delete(index) {
        nomes.splice(index, 1)
    }
}

export default new ModelUser()