const url = 'http://localhost:3000/quartos';

let quartos = [];
let quartoAtual = null;
let numeroExcluir = null;

carregarQuartos();

function carregarQuartos() {

    fetch(url + '/listar')

        .then(response => response.json())

        .then(data => {

            quartos = data;

            listarQuartos();
        })

        .catch(error => {

            console.error(error);

            mostrarMensagem("Erro ao carregar quartos");
        });
}

function listarQuartos() {

    const tabela = document.querySelector('#listaQuartos');

    tabela.innerHTML = '';

    quartos.forEach(quarto => {

        tabela.innerHTML += `

        <tr>

            <td>
                <img
                    src="${quarto.imagem}"
                    class="img-quarto">
            </td>

            <td>${quarto.numero}</td>

            <td>${quarto.tipo}</td>

            <td>

                <button
                    class="btn-ver"
                    onclick="abrirDetalhes(${quarto.numero})">

                    <i class="fa-solid fa-eye"></i>
                    Ver

                </button>

                <button
                    class="btn-ver"
                    onclick="verReservas(${quarto.numero})">

                    Reservas

                </button>

            </td>

        </tr>
        `;
    });
}


function abrirDetalhes(numero) {

    quartoAtual =
        quartos.find(q => q.numero == numero);

    tituloQuarto.innerHTML =
        "Quarto " + quartoAtual.numero;

    numeroEdit.value = quartoAtual.numero;
    tipoEdit.value = quartoAtual.tipo;
    descricaoEdit.value = quartoAtual.descricao;
    imagemEdit.value = quartoAtual.imagem;

    detalhes.classList.remove('oculto');
}


function verReservas(numero) {

    window.location.href =
        `reserva.html?numero=${numero}`;
}


document.querySelector('#formCad')
    .addEventListener('submit', function (e) {

        e.preventDefault();

        const novoQuarto = {

            numero: Number(numero.value),
            tipo: tipo.value,
            descricao: descricao.value,
            imagem: imagem.value
        };

        fetch(url + '/cadastrar', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(novoQuarto)
        })

            .then(response => {

                if (!response.ok) {
                    throw new Error();
                }

                return response.json();
            })

            .then(() => {

                cadastro.classList.add('oculto');

                document.querySelector('#formCad').reset();

                carregarQuartos();

                mostrarMensagem(
                    "Quarto cadastrado com sucesso!",
                    true
                );
            })

            .catch(() => {

                mostrarMensagem(
                    "Erro ao cadastrar quarto",
                    false
                );
            });
    });

function salvarEdicao() {

    const quartoEditado = {

        tipo: tipoEdit.value,

        descricao: descricaoEdit.value,

        imagem: imagemEdit.value
    };

    fetch(url + '/editar/' + quartoAtual.numero, {

        method: 'PUT',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(quartoEditado)
    })

        .then(response => {

            if (!response.ok) {

                throw new Error();
            }

            return response.json();
        })

        .then(() => {

            detalhes.classList.add('oculto');

            carregarQuartos();

            mostrarMensagem(
                "Quarto atualizado com sucesso!"
            );
        })

        .catch(() => {

            mostrarMensagem(
                "Erro ao editar quarto"
            );
        });
}


function excluirQuartoAtual() {

    numeroExcluir = quartoAtual.numero;

    textoConfirmacao.innerHTML =
        "Deseja realmente excluir o quarto " +
        quartoAtual.numero + "?";

    modalConfirmar.classList.remove('oculto');
}

function confirmarExclusao() {

    fetch(url + '/excluir/' + numeroExcluir, {

        method: 'DELETE'
    })

        .then(response => {

            if (!response.ok) {

                throw new Error();
            }

            return response.json();
        })

        .then(() => {

            modalConfirmar.classList.add('oculto');

            detalhes.classList.add('oculto');

            carregarQuartos();

            mostrarMensagem(
                "Quarto excluído com sucesso!"
            );
        })

        .catch(() => {

            modalConfirmar.classList.add('oculto');

            mostrarMensagem(
                "Erro ao excluir quarto"
            );
        });
}


function mostrarMensagem(texto) {

    textoMensagem.innerHTML = texto;

    modalMensagem.classList.remove('oculto');
}