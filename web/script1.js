const url = 'http://localhost:3000/reserva';

let reservas = [];
let reservaAtual = null;
let idExcluir = null;

carregarReservas();

function carregarReservas() {

    fetch(url + '/listar')

        .then(response => response.json())

        .then(data => {

            reservas = data;

            listarReservas();
        })

        .catch(() => {

            textoMensagem.innerHTML =
                "Erro ao carregar reservas";

            modalMensagem.classList.remove('oculto');
        });
}

function listarReservas() {

    const tabela =
        document.querySelector('#listaReservas');

    tabela.innerHTML = '';

    reservas.forEach(reserva => {

        tabela.innerHTML += `

        <tr>

            <td>${reserva.id}</td>

            <td>${reserva.hospede}</td>

            <td>
                ${new Date(reserva.entrada)
                .toLocaleDateString('pt-BR')}
            </td>

            <td>
                ${reserva.saida
                ? new Date(reserva.saida)
                    .toLocaleDateString('pt-BR')
                : '-'}
            </td>

            <td>${reserva.numero}</td>

            <td>

                <button class="btn-ver"
                    onclick="abrirDetalhes(${reserva.id})">

                    Ver

                </button>

                <button class="btn-excluir"
                    onclick="excluirReservaAtual(${reserva.id})">

                    Excluir

                </button>

            </td>

        </tr>
        `;
    });
}

function abrirDetalhes(id) {

    reservaAtual =
        reservas.find(r => r.id == id);

    textoMensagem.innerHTML =

        "Reserva #" + reservaAtual.id +

        "<br><br><b>Hóspede:</b> " + reservaAtual.hospede +

        "<br><b>Entrada:</b> " +

        new Date(reservaAtual.entrada)
            .toLocaleDateString('pt-BR') +

        "<br><b>Saída:</b> " +

        (reservaAtual.saida
            ? new Date(reservaAtual.saida)
                .toLocaleDateString('pt-BR')
            : '-') +

        "<br><b>Quarto:</b> " +

        reservaAtual.numero;

    modalMensagem.classList.remove('oculto');
}

document.querySelector('#formCad')
    .addEventListener('submit', function (e) {

        e.preventDefault();

        const novaReserva = {

            hospede: hospede.value,
            numero: Number(numero.value),
            saida: saida.value || null
        };

        fetch(url + '/cadastrar', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(novaReserva)
        })

            .then(response => {

                if (!response.ok) {
                    throw new Error();
                }

                return response.json();
            })

            .then(() => {

                tituloMensagem.innerHTML = "Sucesso";

                iconeMensagem.innerHTML =
                    '<i class="fa-solid fa-check"></i>';

                iconeMensagem.className = "icone-sucesso";

                textoMensagem.innerHTML =
                    "Reserva cadastrada com sucesso!";

                modalMensagem.classList.remove('oculto');

                cadastro.classList.add('oculto');

                document.querySelector('#formCad').reset();

                carregarReservas();
            })
            .catch(() => {

                tituloMensagem.innerHTML = "Erro";

                iconeMensagem.innerHTML =
                    '<i class="fa-solid fa-circle-exclamation"></i>';

                iconeMensagem.className = "icone-erro";

                textoMensagem.innerHTML =
                    "Erro ao cadastrar reserva";

                modalMensagem.classList.remove('oculto');
            });
    });

function excluirReservaAtual(id) {

    idExcluir = id;

    textoConfirmacao.innerHTML =
        "Deseja realmente excluir a reserva #" + id + "?";

    modalConfirmar.classList.remove('oculto');
}


function confirmarExclusaoReserva() {

    fetch(url + '/excluir/' + idExcluir, {

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

            textoMensagem.innerHTML =
                "Reserva excluída com sucesso!";

            modalMensagem.classList.remove('oculto');

            carregarReservas();
        })

        .catch(() => {

            modalConfirmar.classList.add('oculto');

            textoMensagem.innerHTML =
                "Erro ao excluir reserva!";

            modalMensagem.classList.remove('oculto');
        });
}

function fecharMensagem() {
    modalMensagem.classList.add('oculto');
}