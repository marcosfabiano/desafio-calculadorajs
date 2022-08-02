const inputNumber1 = document.querySelector('[name="number1"]');
inputNumber1.addEventListener('change', handleInputNumber1Change);
inputNumber1.classList.remove("input-error");

function handleInputNumber1Change(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }  
}

const inputNumber2 = document.querySelector('[name="number2"]');
inputNumber2.addEventListener('change', handleInputNumber2Change);
inputNumber2.classList.remove("input-error");

function handleInputNumber2Change(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }  
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const btnAddition = document.querySelector('[id="btn-addition"]');
btnAddition.addEventListener('click', btnAdditionClick);

function btnAdditionClick(event) {
    event.preventDefault();
    
    if (inputNumber1.value > 0 && inputNumber2.value > 0) {
        const resultBox = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
        document.getElementById('result-box').innerHTML = resultBox;
    } 
}

const btnMultiplication = document.querySelector('[id="btn-multiplication"]');
btnMultiplication.addEventListener('click', btnMultiplicationClick);

function btnMultiplicationClick(event) {
    event.preventDefault();
    
    if (inputNumber1.value > 0 && inputNumber2.value > 0) {
        const resultBox = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
        document.getElementById('result-box').innerHTML = resultBox;
    } 
}

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', btnClearClick);

function btnClearClick(event) {
    event.preventDefault();
    inputNumber1.value = ""
    inputNumber1.classList.remove("input-error");
    inputNumber2.value = ""
    inputNumber2.classList.remove("input-error");
    document.getElementById('result-box').innerHTML = 0;
}