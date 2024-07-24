document.getElementById('lixoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const tipoLixoSelect = document.getElementById('tipoLixoSelect').value;
    const tipoLixoInput = document.getElementById('tipoLixo').value.trim().toLowerCase();

    let tipoLixo = tipoLixoSelect.toLowerCase();
    if (tipoLixoInput) {
        tipoLixo = tipoLixoInput;
    }

    const reciclaveis = [
        'copos descartáveis', 'drives', 'embalagens de detergentes', 'embalagem cartonada', 
        'embalagens de margarina', 'envelopes', 'ferramentas', 'fios e cabos elétricos', 
        'folhetos', 'frascos de vidro', 'frascos de plástico', 'garrafas pet', 
        'garrafas de vidro', 'geladeiras', 'impressoras', 'isopor', 
        'janelas de vidro', 'jornais', 'latas de alumínio', 'livros', 
        'livros didáticos', 'liquidificadores', 'metal'
    ];

    const naoReciclaveis = [
        'cosméticos', 'cotonete', 'decoração', 'escovas de dente', 
        'espelhos', 'esponjas', 'etiquetas', 'eureciclo', 
        'fitas adesivas', 'fones de ouvido', 'fotografias', 'fraldas descartáveis', 
        'gesso', 'gravatas', 'guarda-chuvas', 'lenços umedecidos', 
        'lâmpadas', 'lâminas de barbear', 'lixeiras', 'malas', 
        'medicamentos'
    ];

    const resultadoDiv = document.getElementById('resultado');
    if (tipoLixo) {
        if (reciclaveis.includes(tipoLixo)) {
            resultadoDiv.innerHTML = `${tipoLixo.charAt(0).toUpperCase() + tipoLixo.slice(1)} é reciclável.`;
        } else if (naoReciclaveis.includes(tipoLixo)) {
            resultadoDiv.innerHTML = `${tipoLixo.charAt(0).toUpperCase() + tipoLixo.slice(1)} não é reciclável.`;
        } else {
            resultadoDiv.innerHTML = `O tipo de lixo informado não está na lista.`;
        }
    } else {
        resultadoDiv.innerHTML = 'Por favor, informe o tipo de lixo.';
    }
});
