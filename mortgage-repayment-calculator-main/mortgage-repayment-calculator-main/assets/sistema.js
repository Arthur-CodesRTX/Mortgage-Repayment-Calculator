const inputCalculator = document.querySelectorAll(".inputCalculator")
// console.log(inputCalculator)
const errorText = document.querySelectorAll(".errorText")
// console.log(errorText)
const checkBtn = document.querySelectorAll(".checkInput")
// console.log(checkBtn)
const btnCalculate = document.querySelector(".btnCalculate")
// console.log(btnCalculate)
const footerCalculated = document.querySelector(".footerCalculatorDisplayNone")
// console.log(footerCalculated)
const footerResults = document.querySelector(".footerCalculatorDisplay")
// console.log(footerResults)
const clearAll = document.querySelector("#clearAll")
// console.log(clearAll)
const moneyRepay = document.querySelector("#moneyLibra")
// console.log(moneyRepay)
const moneyTotal = document.querySelector("#moneyLibraTotal")
// console.log(moneyTotal)

btnCalculate.addEventListener("click", CalculateRepayments)
clearAll.addEventListener("click", clearInputs)

function CalculateRepayments(parcelaTotal, parcelas, juros){
    event.preventDefault();
    
    inputCalculator.forEach(input => {
    if(input.id === "MortgageInput") parcelaTotal = input.value;
    if(input.id === "MortgageTermInput") parcelas = input.value;
    if(input.id === "InterestInput") juros = input.value;
    })

    const n = parcelas * 12
    const t = juros / 100
    const r = t / 12;
    let liberado = null;

    for(let i = 0; i <= inputCalculator.length; i++){
        for(let j = 0; j <= checkBtn; j++){
        if(inputCalculator[i].value !== "" && checkBtn[j].checked){
             liberado = true  
        } else{
            liberado = false
        }
        }
       
    } 

    if(liberado === true){
        checkBtn.forEach(chkBtn => {
        
            if(chkBtn.checked && chkBtn.id === "checkBox01"){
                pagamentoMensal = parcelaTotal * (r * Math.pow(1 + r,n)) / (Math.pow(1 + r,n) - 1);

                pagamentoTotal = parcelaTotal * (t * Math.pow(1 + t,n)) / (Math.pow(1 + t,n) - 1);

                pagamentoTotal = pagamentoTotal.toFixed(2)
                pagamentoMensal = pagamentoMensal.toFixed(2)
            
            } else if(chkBtn.checked && chkBtn.id === "checkBox02"){
                pagamentoMensal = parcelaTotal * r
                pagamentoTotal = parcelaTotal * t

            }

            moneyRepay.textContent += pagamentoMensal;
            moneyTotal.textContent += pagamentoTotal;
            footerResults.style.display = "none";
            footerCalculated.style.display = "flex";
        })
    } else{
        errorText.forEach( err => {
            err.style.display = "flex"
        })
    }

       



        
        




        

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
