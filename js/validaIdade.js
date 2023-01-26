export default function eMaiorIdade(campo) {
    const dataNascimento = new Date (campo.value)
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade') //setando qualquer valor para o validity ser true
    }
   
}

function validaIdade (data) {
    const dataAtual = new Date()
    const data18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth (), data.getUTCDate())
    return dataAtual >= data18
}