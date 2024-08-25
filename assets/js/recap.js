function enableSubmitBtn() {
    // Identifica o botão correto com base no contexto da página
    const contactsButton = document.getElementById('submitBtnContacts');

    // Se o botão existe na página, habilite-o e aplique o estilo apropriado
    if (contactsButton) {
        contactsButton.disabled = false;
        contactsButton.style.backgroundColor = "#007bff"; // Cor do botão habilitado
        contactsButton.style.color = "#fff";              // Cor do texto habilitado
        contactsButton.style.cursor = "pointer";
        console.log('Botão habilitado:', contactsButton.id);
    } else {
        console.error('Botão não encontrado');
    }
}

