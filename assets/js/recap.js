// Função para habilitar o botão e executar o callback
function enableSubmitBtn(callback) {
    const contactsButton = document.getElementById('submitBtnContacts');
    if (contactsButton) {
        contactsButton.disabled = false;
        contactsButton.style.color = "#fff";
        contactsButton.style.cursor = "pointer";
        console.log('Botão habilitado:', contactsButton.id);
        if (callback) {
            callback(); // Executa o callback após habilitar o botão
        }
    } else {
        console.error('Botão não encontrado');
    }
}

// Função para lidar com o clique do botão
function handleButtonClick() {
    $('#submitBtnContacts').on('click', function() {
        var $this = $(this);
        $this.html("<i class='fas fa-spinner fa-spin'></i> A enviar ...");
        $this.prop('disabled', true);
        console.log('Botão clicado, estado de carregamento aplicado');
    });
}

// Habilita o botão e, em seguida, configura o clique
enableSubmitBtn(handleButtonClick);