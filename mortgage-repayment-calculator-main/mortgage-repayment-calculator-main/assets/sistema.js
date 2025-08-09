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
const spanColor = document.querySelectorAll(".formMortagageInput span")
// console.log(spanColor)
const inputsBorder = document.querySelectorAll(".formMortagageInput")
// console.log(inputsBorder)

btnCalculate.addEventListener("click", CalculateRepayments)
clearAll.addEventListener("click", clearInputs)
inputCalculator.forEach(ipt => ipt.addEventListener("input", detectLetter));

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

    for(let i = 0; i < inputCalculator.length; i++){
        for(let j = 0; j < checkBtn.length; j++){
        if(inputCalculator[i].value !== ""){
            // && checkBtn[j].checked
             liberado = true  
        } else{
            liberado = false
        }
        }
       
    } 

    if (liberado) {
    let pagamentoMensal = null;
    let pagamentoTotal = null;

    checkBtn.forEach(chkBtn => {
        if (chkBtn.checked && chkBtn.id === "checkBox01") {
            pagamentoMensal = parcelaTotal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            pagamentoTotal = parcelaTotal * (t * Math.pow(1 + t, n)) / (Math.pow(1 + t, n) - 1);

        } else if (chkBtn.checked && chkBtn.id === "checkBox02") {
            pagamentoMensal = parcelaTotal * r;
            pagamentoTotal = parcelaTotal * t;
        }
    });

    if (pagamentoMensal !== null && pagamentoTotal !== null) {
        pagamentoMensal = pagamentoMensal.toFixed(2);
        pagamentoTotal = pagamentoTotal.toFixed(2);

        moneyRepay.textContent += pagamentoMensal;
        moneyTotal.textContent += pagamentoTotal;

        footerResults.style.display = "none";
        footerCalculated.style.display = "flex";
    } else {
        errorCalculator()
    }

} else {
   errorCalculator()
}

function errorCalculator(){
    errorText.forEach(err => {
        err.style.display = "flex";
    });
    spanColor.forEach(spn =>{
        spn.style.backgroundColor = "var(--color-seven)";
        spn.style.color = "white";
    })
    inputsBorder.forEach( ipt =>{
        ipt.style.border = "1px solid var(--color-seven)"
    })
}

function detectLetter(e){
   errorText.forEach(err => {
        err.style.display = "none";
    });
    spanColor.forEach(spn =>{
        spn.style.backgroundColor = "var(--color-three)";
        spn.style.color = "var(--color-two)";
    })
    inputsBorder.forEach( ipt =>{
        ipt.style.border = "1px solid var(--color-one)"
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

// 1. Arrumar o vermelho da digitação
