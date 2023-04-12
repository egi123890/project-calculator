let prevNumber = ''
let calculatorOperator = ''
let currenNumber ='0'





const numbers = document.querySelectorAll (".calculator-screen") ;
console.log(numbers);

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currenNumber=number
    } else {
        currenNumber += number
    }
}

const numbers = document.querySelectorALL (".number")

numbers.forEach ((number) => {
    number.addEventListener ("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currenNumber)
    });
});

const operatos = document.querySelectorAll(".operator")

operators.forEach ((operator) => {
    operator.addEventListener("click", (Event) =>   {
        inputOperator( even.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currenNumber
    calculatorOperator = operator
    currenNumber = ''
}

const equalSign =document.querySelector ('.equal-sign')

equalSign.addEventListener( 'click', () => {
    calculate ()
    updateScreen (currenNumber)
    console.log  ( 'equal button is pressed')
})

const calculate = () => {
    let resut = ''
    switch (calculationOperator) {
        case "+" :
            result = parseInt (prevNumber) + parseInt (currenNumber)
            break
        case "-" :
            result = parseInt (prevNumber) - parseInt (currenNumber)
            break
        case "*" :
            result = parseInt (prevNumber) * parseInt (currenNumber)
            break
        case "/" :
            result = parseInt (prevNumber) / parseInt (currenNumber)
            break
        default:
            return
    }
    currenNumber = resut
    calculationOperator = ''
}

const clearBtn = document.querySelector ('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculateOperator = ''
    currentNumber = '0'
}

inputDecimal = (dot) => {
    if (currenNumber.includes ('.')) {
        return
    }
    currenNumber += dot
}
const decimal = document.querySelector ('.decimal')

decimal.addEventListener('click', (Event) => {
    inputDecimal(Event. target. value)
    console.log (Event. target. value)
    updateScreen(currenNumber)
})