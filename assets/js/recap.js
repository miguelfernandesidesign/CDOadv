// Função para habilitar o botão de envio após a validação da reCAPTCHA
function enableSubmitBtn() {
    const contactsButton = document.getElementById('submitBtnContacts');

    // Se o botão existe na página, habilite-o e aplique o estilo apropriado
    if (contactsButton) {
        contactsButton.disabled = false;
        contactsButton.style.color = "#fff";
        contactsButton.style.cursor = "pointer";
        console.log('Botão habilitado:', contactsButton.id);
    } else {
        console.error('Botão não encontrado');
    }
}

// Captura o evento de envio do formulário para mostrar o spinner e enviar o formulário
document.querySelector('.form-contact').addEventListener('submit', function() {
    var submitButton = document.getElementById('submitBtnContacts');
    submitButton.innerHTML = "<i class='fas fa-spinner fa-spin'></i> A enviar"; // Altera o texto e adiciona o spinner
    submitButton.disabled = true; // Desativa o botão enquanto o formulário está sendo enviado
});