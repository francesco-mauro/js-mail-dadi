document.getElementById('lanciaDadi').addEventListener('click', function() {
    const dadoGiocatore = Math.floor(Math.random() * 6) + 1;
    const dadoComputer = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dadoGiocatore').textContent = dadoGiocatore;
    document.getElementById('dadoComputer').textContent = dadoComputer;

    const vincitore = document.getElementById('vincitore');
    if (dadoGiocatore > dadoComputer) {
        vincitore.textContent = 'Hai vinto!';
    } else if (dadoGiocatore < dadoComputer) {
        vincitore.textContent = 'Il computer vince!';
    } else {
        vincitore.textContent = 'Pareggio!';
    }
});