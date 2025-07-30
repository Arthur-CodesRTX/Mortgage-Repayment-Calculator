let inputCalculator = document.querySelectorAll(".inputCalculator")
// console.log(inputCalculator)
let errorText = document.querySelectorAll(".errorText")
// console.log(errorText)
let checkBtn = document.querySelectorAll(".checkInput")
// console.log(checkBtn)
let btnCalculate = document.querySelector(".btnCalculate")
// console.log(btnCalculate)
let footerCalculated = document.querySelector(".footerCalculatorDisplayNone")
// console.log(footerCalculated)
let footerResults = document.querySelector(".footerCalculatorDisplay")
// console.log(footerResults)
let clearAll = document.querySelector("#clearAll")
// console.log(clearAll)
let moneyRepay = document.querySelector("#MoneyLibra")
// console.log(moneyRepay)
let moneyTotal = document.querySelector("#moneyLibraTotal")
// console.log(moneyTotal)

btnCalculate.addEventListener("click", CalculateRepayments)
clearAll.addEventListener("click", clearInputs)

function CalculateRepayments(){
    event.preventDefault();
    inputCalculator.forEach( input =>{
        
        // input.value
        footerResults.style.display = "none"
        footerCalculated.style.display = "flex"

    })

}

function clearInputs(){
    inputCalculator.forEach(input => {
        input.value = "";  
    });

    checkBtn.forEach(check => {
        check.checked = false
    })
}

// 1. PEGAR OS DADOS DOS INPUTS E CALCULAR, QUANDO CALCULADO TRANFERIR PARA A PROXIMA PÁGINA.
// 2. CASO, DE ALGUM ERRO MOSTRAR ABAIXO DO INPUT E CALCELAR O ENVIO.
// 3 . VERIFICAR O MORTGAGE TYPE, QUE PELO MENOS UM DELES TEM QUE ESTAR ATIVADO, E NUNCA OS DOIS PODEM ESTAR ATIVADOS JUNTOS, SE NÃO MOSTRAR ERROR.
// 4. SE A PESSOA COMEÇAR A ESCREVER RETIRAR O ERROR.
// 5. CASO A PESSOA QUEIRA APAGAR TODO O CONTEÚDO DOS INPUTS, USAR O CLEAR ALL.
