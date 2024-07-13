function showDetails(material) {
    const detalhesDiv = document.getElementById('detalhes');
    let detalhes = '';

    switch(material) {
        case 'vidro':
            detalhes = '<h2>Vidro</h2><p>Vidros são 100% recicláveis e podem ser reaproveitados inúmeras vezes sem perder a qualidade. Lave bem antes de descartar.</p>';
            break;
        case 'plastico':
            detalhes = '<h2>Plástico</h2><p>Plásticos devem ser limpos antes de serem reciclados. Separe por tipo de plástico, se possível.</p>';
            break;
        case 'papel':
            detalhes = '<h2>Papel</h2><p>Papéis que não estão sujos ou contaminados com alimentos podem ser reciclados. Separe papéis brancos, jornais e revistas.</p>';
            break;
        case 'metal':
            detalhes = '<h2>Metal</h2><p>Metais, como latas de alumínio e aço, são recicláveis. Lave-os antes de descartar para evitar contaminação.</p>';
            break;
        default:
            detalhes = '<p>Selecione um material para ver os detalhes de reciclagem.</p>';
    }

    detalhesDiv.innerHTML = detalhes;
}

