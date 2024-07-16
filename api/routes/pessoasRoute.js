const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaUmPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmMatricula)
    .get('/pessoas/:estudanteId/matricula', PessoaController.pegaTodasMatricula)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
    .get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
    .post('/pessoas', PessoaController.criarPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criarMatricula)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
    .delete('/pessoas/:id', PessoaController.deletaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)


module.exports = router