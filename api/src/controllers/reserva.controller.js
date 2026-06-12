const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {

    try {

        const data = req.body;

        const item = await prisma.reserva.create({

            data: {

                hospede: data.hospede,

                numero: Number(data.numero),

                saida: data.saida
                    ? new Date(data.saida)
                    : null
            }
        });

        res.status(201).json(item);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            erro: "Erro ao cadastrar reserva"
        });
    }
};

const listar = async (req, res) => {

    const lista = await prisma.reserva.findMany();

    res.status(200).json(lista);
};

const buscar = async (req, res) => {

    const { id } = req.params;

    const item = await prisma.reserva.findUnique({

        where: {
            id: Number(id)
        }
    });

    res.status(200).json(item);
};

const atualizar = async (req, res) => {

    const { id } = req.params;

    const dados = req.body;

    const item = await prisma.reserva.update({

        where: {
            id: Number(id)
        },

        data: {

            hospede: dados.hospede,

            numero: Number(dados.numero),

            saida: dados.saida
                ? new Date(dados.saida)
                : null
        }
    });

    res.status(200).json(item);
};

const excluir = async (req, res) => {

    const { id } = req.params;

    const item = await prisma.reserva.delete({

        where: {
            id: Number(id)
        }
    });

    res.status(200).json(item);
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};