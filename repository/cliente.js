import cliente from '../model/cliente.js';

class RepositoryCliente {
////////////////////////////////////
    async Create(nome,email,senha) {
        const clienteCreate = await cliente.create({ nome , email, senha })

        return clienteCreate
    }
//////////////////////////////////
        async Find() {
            const clientes = await cliente.findAll()

            return clientes
        
    }
        async FindById(id) {
        const clienteDetalhes = await cliente.findByPk(id)

        return clienteDetalhes
    }
        async Update(id, nome, email, senha) {
            const clienteAlterar = await cliente.findByPk(id)

            if(!clienteAlterar) {
                throw new Error("Cliente não encontrado")
            }
        
            clienteAlterar.nome = nome || clienteAlterar.nome
            clienteAlterar.email = email || clienteAlterar.email
            clienteAlterar.senha = senha || clienteAlterar.senha
            
            await clienteAlterar.save()
    }
        async Delete(id) {

        const clienteDeletar = await cliente.findByPk(id)

        if(!clienteDeletar){
            throw new Error("Cliente não encontrado")
        }
        await clienteDeletar.destroy()

        return clienteDeletar
    }

    async FindByEmail(email) {
        return cliente.findOne({ where: {email}})
    }
    
}
export default new RepositoryCliente()