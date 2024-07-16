document.getElementById('lixoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tipoLixo = document.getElementById('tipoLixo').value.trim().toLowerCase();
    const resultadoDiv = document.getElementById('resultado');

    const reciclaveis = ['papel', 'papelão', 'plástico', 'vidro', 'metal', 'tetrapak'];
    const naoReciclaveis = ['orgânico', 'restos de comida', 'guardanapo sujo', 'papel higiênico', 'fralda', 'absorvente'];

    let mensagem = '';

    if (reciclaveis.includes(tipoLixo)) {
        mensagem = `O lixo "${tipoLixo}" é reciclável.`;
    } else if (naoReciclaveis.includes(tipoLixo)) {
        mensagem = `O lixo "${tipoLixo}" não é reciclável.`;
    } else {
        mensagem = `Não tenho informação sobre o lixo "${tipoLixo}".`;
    }

    resultadoDiv.textContent = mensagem;
});

