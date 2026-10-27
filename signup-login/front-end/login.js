const btn = document.getElementById('btn').addEventListener('click', readData)

function readData () {
    const emailInput = document.getElementById('user-email').value
    const passwordInput = document.getElementById('user-password').value
    const errorMessage = document.getElementById('erro-message')
    

    if (!emailInput || !passwordInput) {
        errorMessage.style.visibility = 'visible'
        errorMessage.innerText = 'All fields must be filed out'
        return;
    }

    fetch('http://127.0.0.1:5000/login', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput, password: passwordInput})
    })
    .then(async response => {
        const data = await response.json()

        if (!response.ok) {
            alert("Erro", data.erro)
            return Promise.reject(new Error(data.erro))
        }

        return data

    })
    .then(data => {
        if (data.erro){
            alert('Error',data.erro)
        } else{
            alert(`Welcome ${data.name}`)
            alert(data.message)
            window.location.href = './main.html'
        }
    })
    .catch(error => {
        console.log('Response error', error)
        alert('Erro trying to connect with the server')
    })
}