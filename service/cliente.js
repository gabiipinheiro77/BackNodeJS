import RepositoryCliente from '../repository/cliente.js'

class ServiceCliente {

    async Criar(nome, email, senha) {

        if (!nome || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }
        const cliente = await RepositoryCliente.Create(nome, email, senha)

        return cliente
    }
    async Buscar() {

        return RepositoryCliente.Find()

    }
    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const cliente = await RepositoryCliente.FindById(id)

        if (!cliente) {
            throw new Error(`ID ${id} do carro não encontrado`)
        }
        return cliente
    }
    async Alterar(id,nome,email,senha) {
        if(!id) {
            throw new Error("Favor informar os dados")
        }
        const clienteAlterar = await RepositoryCliente.Update(id,nome,email,senha)

        return clienteAlterar

    }
    async Deletar (id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const cliente = await RepositoryCliente.Delete(id)

        return cliente
    }

    async Login(nome,email,senha) {
        if(!nome || !email || !senha) {
            throw new Error("Algo invalido")
        }
        const cliente = await RepositoryCliente.FindByEmail(email)

        if(!cliente) {
            throw new Error("Algo inválido")
        }
        if(
            !(await bcrypt.compare(String(senha),cliente.senha))
        ) {
            throw new Error("Algo inválido")
        }
        return jwt.sing(
            {id: cliente.id, email},
            segredo,
            { expiresIn: 60 * 60}
        )
    }
    
}

export default new ServiceCliente()