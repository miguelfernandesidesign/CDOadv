function enableSubmitBtn() {
    // Identifica o botão correto com base no contexto da página
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

// Função para mudar o botão para o estado de carregamento ao clicar
function handleButtonClick() {
    $('#submitBtnContacts').on('click', function() {
        var $this = $(this);
        var originalText = $this.html();
        
        // Muda o botão para o estado de carregamento
        $this.html("<i class='fas fa-spinner fa-spin'></i> A enviar ..."); 
        $this.prop('disabled', true); // Desativa o botão enquanto está processando
    });
}

// Chama as funções após o DOM estar carregado
$(document).ready(function() {
    enableSubmitBtn();
    handleButtonClick();
});