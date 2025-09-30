const moeda = document.getElementById('moeda');
const girarBtn = document.getElementById('girar-btn');
const resultadoTexto = document.getElementById('resultado-texto');
const placarCaraEl = document.getElementById('placar-cara');
const placarCoroaEl = document.getElementById('placar-coroa');


let placar = {
    cara: 0,
    coroa: 0
};


girarBtn.addEventListener('click', () => {
    girarBtn.disabled = true;
    resultadoTexto.textContent = 'Girando...';
    
    const resultadoSorteado = Math.floor(Math.random() * 2);

    moeda.classList.remove('girando-cara', 'girando-coroa');
    void moeda.offsetWidth;

    
    moeda.classList.add('is-spinning');

    if (resultadoSorteado === 0) {
        moeda.classList.add('girando-cara');
        placar.cara++;
    } else {
        moeda.classList.add('girando-coroa');
        placar.coroa++;
    }

    setTimeout(() => {
        
        moeda.classList.remove('is-spinning');

        if (resultadoSorteado === 0) {
            resultadoTexto.textContent = 'Deu Cara!';
            placarCaraEl.textContent = placar.cara;
        } else {
            resultadoTexto.textContent = 'Deu Coroa!';
            placarCoroaEl.textContent = placar.coroa;
        }
        
        girarBtn.disabled = false;
    }, 1200);
});