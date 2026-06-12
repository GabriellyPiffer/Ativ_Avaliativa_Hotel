const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    const item = await prisma.quarto.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.quarto.findMany({
        include: {
            reserva: true
        }
    });

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { numero } = req.params;

    const quarto = await prisma.quarto.findUnique({
        where: { numero: Number(numero) },
        include: {
            reserva: true
        }
    });

    res.status(200).json(quarto);
};


const atualizar = async (req, res) => {
    const { numero } = req.params;
    const dados = req.body;

    const item = await prisma.quarto.update({
        where: { numero: Number(numero) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { numero } = req.params;

    await prisma.quarto.delete({
        where: { numero: Number(numero) }
    });

    res.status(200).json({ mensagem: "Excluído com sucesso!!!" });
};


module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
