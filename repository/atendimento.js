import atendimento from '../model/atendimento.js';

class RepositoryAtendimento {
    ////////////////////////////////////
    async Create(dia, hora, valor, concluido) {
        const atendimentoCreate = await atendimento.create({ dia, hora, valor, concluido })

        return atendimentoCreate
    }
    //////////////////////////////////
    async Find() {
        const atendimentos = await atendimento.findAll()

        return atendimentos

    }
    async FindById(id) {
        const atendimentoDetalhes = await atendimento.findByPk(id)

        return atendimentoDetalhes
    }
    async Update(id, dia, hora, valor, concluido) {
        const atendimentoAlterar = await atendimento.findByPk(id)

        if (!atendimentoAlterar) {
            throw new Error("atendimento não encontrado")
        }

        atendimentoAlterar.dia = dia || atendimentoAlterar.dia
        atendimentoAlterar.hora = hora || atendimentoAlterar.hora
        atendimentoAlterar.valor = valor || atendimentoAlterar.valor
        atendimentoAlterar.concluido = concluido || atendimentoAlterar.concluido

        await atendimentoAlterar.save()
    }
    async Delete(id) {

        const atendimentoDeletar = await atendimento.findByPk(id)

        if (!atendimentoDeletar) {
            throw new Error("atendimento não encontrado")
        }
        await atendimentoDeletar.destroy()

        return atendimentoDeletar
    }


}
export default new RepositoryAtendimento()