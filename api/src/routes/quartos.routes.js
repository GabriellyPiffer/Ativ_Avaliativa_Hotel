const express = require("express");

const router = express.Router();

const { 
    cadastrar, 
    listar, 
    buscar, 
    atualizar, 
    excluir } = require("../controllers/quartos.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/buscar/:numero", buscar);
router.put("/editar/:numero", atualizar);
router.delete("/excluir/:numero", excluir);

module.exports = router;
