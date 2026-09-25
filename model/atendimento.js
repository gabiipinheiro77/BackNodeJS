import database from "../config/database.js";
//id,dia,hora,valor,concluido
class Atendimento {
    constructor() {
        this.model = database.db.define("atendimentos", {
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement: true
            },
            dia: { 
                type: database.db.Sequelize.INTEGER,
            },
            hora : { 
                type: database.db.Sequelize.INTEGER,
            },
            valor: { 
                type: database.db.Sequelize.INTEGER,
            },
            concluido: { 
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Atendimento().model