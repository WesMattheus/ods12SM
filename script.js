document.getElementById('lixoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tipoLixoSelect = document.getElementById('tipoLixoSelect').value;
    const tipoLixoInput = document.getElementById('tipoLixo').value.trim();

    let tipoLixo = tipoLixoSelect;
    if (tipoLixoInput) {
        tipoLixo = tipoLixoInput;
    }

    const resultadoDiv = document.getElementById('resultado');
    if (tipoLixo) {
        if (tipoLixo.toLowerCase() === 'vidro' || tipoLixo.toLowerCase() === 'plastico' ||
            tipoLixo.toLowerCase() === 'papel' || tipoLixo.toLowerCase() === 'metal') {
            resultadoDiv.innerHTML = `${tipoLixo} é reciclável.`;
        } else if (tipoLixo.toLowerCase() === 'orgânico') {
            resultadoDiv.innerHTML = `${tipoLixo} é orgânico e deve ser compostado.`;
        } else {
            resultadoDiv.innerHTML = `${tipoLixo} não é reciclável.`;
        }
    } else {
        resultadoDiv.innerHTML = 'Por favor, informe o tipo de lixo.';
    }
});
