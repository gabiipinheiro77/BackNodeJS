import RepositoryAtendimento from '../repository/cliente.js'

class ServiceAtendimento {

    async Criar(dia, hora, valor, concluido) {

        if (!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimento = await RepositoryAtendimento.Create(dia, hora, valor, concluido)

        return atendimento
    }
    async Buscar() {

        return RepositoryAtendimento.Find()

    }
    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const atendimento = await RepositoryAtendimento.FindById(id)

        if (!atendimento) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }
        return atendimento
    }
    async Alterar(id,dia,hora,valor, concluido) {
        if(!id) {
            throw new Error("Favor informar os dados")
        }
        const atendimentoAlterar = await RepositoryAtendimento.Update(id,dia,hora,valor, concluido)

        return atendimentoAlterar

    }
    async Deletar (id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimento = await RepositoryAtendimento.Delete(id)

        return atendimento
    }

    
}

export default new ServiceAtendimento()