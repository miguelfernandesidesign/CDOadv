function enableSubmitBtn(enable) {
    const submitBtn = document.getElementById('submitBtnContacts');

    if (enable) {
        console.log('Habilitando o botão');
        submitBtn.disabled = false;
    } else {
        console.log('Desabilitando o botão');
        submitBtn.disabled = true;
    }
}
