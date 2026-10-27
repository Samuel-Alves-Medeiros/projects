const btn = document.getElementById('btn').addEventListener('click', sendData)

function sendData () {
    const emailInput = document.getElementById('user-email').value
    const nameInput = document.getElementById('user-name').value
    const passwordInput = document.getElementById('user-password').value
    const passwordInputConfirm = document.getElementById('password-confirm').value
    const errorMessage = document.getElementById('erro-message')

    errorMessage.style.visibility = 'hidden'

    if (passwordInput != passwordInputConfirm){
        errorMessage.style.visibility = 'visible'
        errorMessage.innerText = "The password's are diferent"
        return;
    }



    if (!emailInput || !passwordInput || !nameInput){
        errorMessage.style.visibility = 'visible'
        errorMessage.innerText = 'All fields must be filed out'
        return;
    }

    fetch('http://127.0.0.1:5000/signup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput, name: nameInput, password: passwordInput})
    })
    .then(response => response.json())
    .then(data => {
        if (data.erro){
            alert("Erro:" + data.erro);
        } else {
            alert(data.message)
        }
    })
    .catch(error => {
        console.error('Requisition error;' + error)
        alert('Erro trying to connect with the server')
    })
}

