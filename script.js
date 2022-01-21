// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btnEnviar = document.querySelector('.botaoEnviar')

function handleCEP(){
    const form = document.forms.cep
    const inputTxt = form.texto.value
    const resultado = document.querySelector('.resultado')

    const cepAPI = fetch(`https://viacep.com.br/ws/${inputTxt}/json/`)
    cepAPI.then(r => r.json())
    .then(body => {
      
        resultado.innerHTML = `<br>${body.cep}<br>${body.bairro}<br>${body.logradouro}<br>${body.localidade}<br>${body.uf}`
    })
    .catch(() => {
        resultado.innerHTML = 'CEP inválido'
    })
    .finally(()=>{
        console.log('operação finalizada')
    })
}


btnEnviar.addEventListener('click', handleCEP)
