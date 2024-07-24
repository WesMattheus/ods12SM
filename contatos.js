const contacts = [
    {
        name: "EcoAssist",
        description: "EcoAssist oferece serviços de coleta e descarte de resíduos, incluindo eletrônicos, móveis e eletrodomésticos. A empresa promove a destinação correta de resíduos e a reciclagem.",
        contact: "Email: comercial@ecoassist.com.br | Telefone: 0800 326 1000"
    },
    {
        name: "Eureciclo",
        description: "Eureciclo trabalha com logística reversa de embalagens, ajudando empresas a compensar o impacto ambiental das embalagens de seus produtos por meio da reciclagem.",
        contact: "Email: comercial@eureciclo.com.br"
    },
    {
        name: "Recicleiros",
        description: "Recicleiros é uma ONG que promove a reciclagem e a gestão sustentável de resíduos sólidos, atuando em parceria com empresas, prefeituras e comunidades.",
        contact: "Link: <a href='https://recicleiros.org.br/contato-logistica-reversa/' target='_blank'>https://recicleiros.org.br/contato-logistica-reversa/</a>"
    },
    {
        name: "Boomera",
        description: "Boomera transforma resíduos pós-consumo e industriais em novos produtos, promovendo a economia circular e a sustentabilidade.",
        contact: "Instagram: @boomerabr"
    },
    {
        name: "Dinâmica Ambiental",
        description: "Dinâmica Ambiental oferece soluções para a gestão de resíduos, incluindo coleta, transporte e destinação final de resíduos industriais e comerciais.",
        contact: "Telefone: 11 4056-3365 | Email: atendimento@dinamicambiental"
    }
];

function loadContacts() {
    const contactsList = document.getElementById('contactsList');
    contacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
            <h2>${contact.name}</h2>
            <p>${contact.description}</p>
            <p class="contact-info">${contact.contact}</p>
        `;
        contactsList.appendChild(contactCard);
    });
}

window.onload = loadContacts;
