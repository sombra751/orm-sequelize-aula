// const database = require('../models');

const Services = require('../services/services');
const NiveisServices = new Services('Niveis');

class NivelController {
    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await NiveisServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res) {
        const { id } = req.params
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarNivel(req, res) {
        const novoNivel = req.body
        try {
            const novoNivelCriada = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaNivel(req, res) {
        const novaInfo = req.body
        const { id } = req.params
        try {
            await database.Niveis.update(novaInfo, {where: {id: Number(id)}}
            )
            const NivelAtualizado = await database.Niveis.findOne({where: {id: Number(id)}})
        return res.status(200).json(NivelAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id: ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController