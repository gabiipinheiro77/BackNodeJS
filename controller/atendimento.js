import ServiceAtendimento from "../service/atendimento.js"

class ControllerAtendimento {
    ///////////////////////////
    async Criar(req, res) {
        try {
            const { dia,hora,valor,concluido } = req.body

            await ServiceAtendimento.Criar(dia,hora,valor,concluido)

            res.status(201).send({
                message:"Cadastrado com sucesso"
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }
    ///////////////////////////
    async Buscar(_,res) {
        try{
            const atendimentos = await ServiceAtendimento.Buscar()
            res.status(200).send({
                message: atendimentos })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
    // ///////////////////////////
    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimento = await ServiceAtendimento.Detalhe(id)

            res.status(200).send({
                message:atendimento
            })
        } catch(error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
    // ///////////////////////////
    async Alterar(req,res ) {
        try {
            const { dia,hora,valor,concluido } = req.body
            const id = req.params.id

            await ServiceAtendimento.Alterar(id, dia,hora,valor,concluido)

            res.status(201).send({message:"Alterado com sucesso"})
        }catch (error) {
            res.status(500).send({
                message:error.message
            })
        }

    }
    // ///////////////////////////
    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendimento.Deletar( identificador)

            res.status(204).send({
                message :"Deletado"})
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }
    ///////////////////////////
}
export default new ControllerAtendimento()