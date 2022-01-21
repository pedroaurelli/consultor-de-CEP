// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const btnEnviar = document.querySelector('.botaoEnviar')

function handleCEP(){
    //selecionando o form
    const form = document.forms.cep
    //selecionando o valor do input
    const inputTxt = form.texto.value
    //selecionando a div que irá aparecer o resultado
    const resultado = document.querySelector('.resultado')

    //criando uma const e fazendo requisição http na API viacep
    const cepAPI = fetch(`https://viacep.com.br/ws/${inputTxt}/json/`)
    //transformando o response em .json
    cepAPI.then(r => r.json())

    //manipulando o body (json) retornado
    .then(body => {
      
        resultado.innerHTML = `<br>${body.cep}<br>${body.bairro}<br>${body.logradouro}<br>${body.localidade}<br>${body.uf}`
    })

    //caso a requisição de erro, aparecerá uma mensagem de erro na div
    .catch(() => {
        resultado.innerHTML = 'CEP inválido'
    })

    //apenas para indentificar que foi finalizado o processo
    .finally(()=>{
        console.log('operação finalizada')
    })
}

//adicionando um evento ao botão
btnEnviar.addEventListener('click', handleCEP)
