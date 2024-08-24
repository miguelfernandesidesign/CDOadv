const requestUrl = 'https://formsubmit.co/d9df7d3bd15fc64b9034cbcf9124b7e1'

function sendData() {
    let formBody = [
        'name=' + encodeURIComponent (document.getElementById('name').value),
        'email=' + encodeURIComponent (document.getElementById('email').value),
        'telephone=' + encodeURIComponent (document.getElementById('telephone').value),
        'job-role=' + encodeURIComponent (document.getElementById('job-role').value),
        'subject=' + encodeURIComponent (document.getElementById('subject').value),
        'message=' + encodeURIComponent (document.getElementById('message').value),
    ].join('&')

    let xhr = new XMLHttpRequest()

    xhr.open('POST',requestUrl)

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlenconded')

    xhr.onload = function () {
        if (xhr.status === 200) {
            //Redirect to thank you page
            window.location = '/enviado'

            return
        }
        alert('Erro')
    }

    xhr.send(formBody)
}