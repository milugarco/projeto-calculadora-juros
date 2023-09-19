const readlineSync = require('readline-sync')

let valor
let dias
let percent
let total
let choose

function aplicationJuros() {
    console.log('Aplicação de Juros\n')

    userChoose()

    if (choose == 1) {
        getValor()
        getDias()
        calcPercent()
        calcTotal()
        showResult()
        userChoose()
    } else if (choose == 2) {
        console.log('Até mais')
        return false
    } else {
        console.log('Digite uma opção válida!')
        userChoose()
    }
}

function userChoose() {
    console.log('\nO que você deseja fazer?\n')
    console.log('1 - calcular juros')
    console.log('2 - sair')

    choose = readlineSync.question('Escolha uma das opções acima: ')
    return choose
}

function getValor() {
    valor = readlineSync.question('Informe o valor devido: ')
    if (valor <= 0) {
        console.log('Por favor digite um valor válido!')
        getValor()
    }

    return valor
}

function getDias() {
    dias = readlineSync.question('Informe quantos dias se passaram desde o vencimento do boleto: ')
    if (dias <= 0) {
        console.log('Por favor digite um valor válido!')
        getDias()
    }

    return dias
}

function calcPercent() {
    if (dias >= 15) {
        percent = (10 / 100) * Number(valor)
    } else {
        percent = (5 / 100) * Number(valor)
    }

    return percent
}

function calcTotal() {
    total = Number(valor) + percent
    return total
}

function showResult() {
    console.log(`\nValor original da dívida: R$${valor}`)
    console.log(`Dias atrasados: ${dias}`)
    console.log(`Taxa de juros: ${percent}%`)
    console.log(`Valor Total com juros: R$${total}`)

    return true
}

aplicationJuros()


