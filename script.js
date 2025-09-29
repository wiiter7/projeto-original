// Seleciona os elementos do HTML que vamos manipular
const moeda = document.getElementById('moeda');
const girarBtn = document.getElementById('girar-btn');
const resultadoTexto = document.getElementById('resultado-texto');
const placarCaraEl = document.getElementById('placar-cara');
const placarCoroaEl = document.getElementById('placar-coroa');

// Objeto para guardar a pontuação
let placar = {
    cara: 0,
    coroa: 0
};

// Adiciona um "ouvinte" de evento para o clique no botão
girarBtn.addEventListener('click', () => {
    // 1. Desabilita o botão para evitar cliques durante a animação
    girarBtn.disabled = true;
    resultadoTexto.textContent = 'Girando...';

    // 2. Sorteia um número aleatório: 0 para cara, 1 para coroa
    const resultadoSorteado = Math.floor(Math.random() * 2);

    // 3. Remove as classes de animação anteriores para garantir que a nova funcione
    moeda.classList.remove('girando-cara', 'girando-coroa');
    
    // Pequeno truque para forçar o navegador a reiniciar a animação CSS
    void moeda.offsetWidth;

    // 4. Anima a moeda e atualiza o placar com base no resultado
    if (resultadoSorteado === 0) {
        // Se deu CARA
        moeda.classList.add('girando-cara');
        placar.cara++;
    } else {
        // Se deu COROA
        moeda.classList.add('girando-coroa');
        placar.coroa++;
    }

    // 5. Espera a animação terminar (1.2 segundos) para mostrar o resultado final
    setTimeout(() => {
        if (resultadoSorteado === 0) {
            resultadoTexto.textContent = 'Deu Cara!';
            placarCaraEl.textContent = placar.cara;
        } else {
            resultadoTexto.textContent = 'Deu Coroa!';
            placarCoroaEl.textContent = placar.coroa;
        }
        // Habilita o botão novamente
        girarBtn.disabled = false;
    }, 1200); // Este tempo (1200ms) deve ser o mesmo da transição no CSS
});