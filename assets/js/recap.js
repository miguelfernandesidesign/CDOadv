function enableSubmitBtn() {
    const contactsButton = document.getElementById('submitBtnContacts');

    // Se o botão existe na página, habilite-o e aplique o estilo apropriado
    if (contactsButton) {
        contactsButton.disabled = false;
        contactsButton.style.color = "#fff";
        contactsButton.style.cursor = "pointer";
        console.log('Botão habilitado:', contactsButton.id);

        // Adiciona um evento de clique ao botão para mudar o texto e mostrar o spinner
        contactsButton.addEventListener('click', function() {
            contactsButton.innerHTML = "<i class='fas fa-spinner fa-spin'></i> A enviar"; // Altera o texto e adiciona o spinner
            contactsButton.disabled = true; // Desativa o botão enquanto o formulário está sendo enviado
        });
    } else {
        console.error('Botão não encontrado');
    }
}