document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os botões de navegação
    const navInicio = document.getElementById('nav-inicio');
    const navFormularios = document.getElementById('nav-formularios');
    const navAcompanhar = document.getElementById('nav-acompanhar');
    const btnEnviarSolicitacao = document.getElementById('btn-enviar-solicitacao');

    // Seleciona as seções (telas)
    const telaInicial = document.getElementById('tela-inicial');
    const telaFormulario = document.getElementById('tela-formulario');
    const telaAcompanhar = document.getElementById('tela-acompanhar');

    const todasAsTelas = [telaInicial, telaFormulario, telaAcompanhar];

    // Função para mostrar uma tela e esconder as outras
    function mostrarTela(telaParaMostrar) {
        todasAsTelas.forEach(tela => {
            tela.classList.add('hidden');
        });
        telaParaMostrar.classList.remove('hidden');
    }

    // Event Listeners (escutam os cliques nos botões)
    navInicio.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o link de recarregar a página
        mostrarTela(telaInicial);
    });

    navFormularios.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarTela(telaFormulario);
    });

    // O botão da página inicial também leva ao formulário
    btnEnviarSolicitacao.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarTela(telaFormulario);
    });

    navAcompanhar.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarTela(telaAcompanhar);
    });
    
    // Mostra a tela inicial por padrão ao carregar a página
    mostrarTela(telaInicial);
});
