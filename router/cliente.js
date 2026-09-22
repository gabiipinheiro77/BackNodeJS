import express from "express"
import ControllerCliente from "../controller/cliente.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/criar", ControllerCliente.Criar)
router.get("/buscar", authMiddleware,ControllerCliente.Buscar)
router.get("/detalhe/:id", ControllerCliente.Detalhe)
router.put("/alterar/:id", ControllerCliente.Alterar)
router.delete("/deletar/:id", ControllerCliente.Deletar)

export default router 