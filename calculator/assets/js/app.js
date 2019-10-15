// SELECTORS
let numberBtns = document.querySelectorAll('.number')
let operatorBtns = document.querySelectorAll('.operator')
let equals = document.getElementById('equals')
let output = document.getElementById('output')
let resOut = document.getElementById('resultOutput')
let prevOps = document.getElementById('prevOperations')
let cBtn = document.getElementById('cBtn')
let deleteBtn = document.getElementById('deleteBtn')

// VARIABLES
let numbers = []
let number = ""
let operator
let result = 0
let string = ""

// INIT
init()

// FUNCTIONS
function init() {
    clear()
    registerEventListeners()
}

// ADDING EVENT LISTENERS
function registerEventListeners() {

    // EVENT LISTENER ON THE OPERATOR BUTONS
    for(button of operatorBtns) {

        button.addEventListener('click', (e) => {

            operator = e.target.innerText
            string += `${number} ${operator} `
            prevOps.innerText = string

            if(number == "") {
                
                // DO NOTHING

            } else {   
                
                numbers.push(number)
                number = ""

            }

        })

    }

    // EVENT LISTENER ON THE NUMBER BUTONS
    for(button of numberBtns) {

        button.addEventListener('click', (e) => {

            number += e.target.innerText
            output.innerHTML = `<p>${number}</p><small>${string}</small>`
                        
            if(result !== 0 && number == "" && operator == "") {

                string = ""
                numbers = []
                result = 0                

            }

        })
    }

    // EVENT LISTENER ON THE EQUALS BUTTON
    equals.addEventListener('click', (e) => {
        result = 0
        numbers.push(number)

        for(let i = 0; i < numbers.length; i++){

            switch(operator) {
                case "+":
                    result += parseFloat(numbers[i])
                    break                
    
                case "-":                
                    i == 0 ? result = numbers[i] : result -= numbers[i]                
                    break
    
                case "*":
                    i == 0 ? result = numbers[i] : result *= numbers[i]
                    break
    
                case "/":
                    i == 0 ? result = numbers[i] : result /= numbers[i]
                    break
    
                case "√x":
                    result = Math.sqrt(numbers[0])
                    break
    
                case "x2":
                    result = Math.pow(numbers[0], 2)
                    break
    
                default : 
                    result = numbers[0]
                    break;
            }
        }

        string += `${number} = ${result}`
        operator = ""
        number = ""

        // SET THE NUMBERS ARRAY TO THE RESULT ONLY
        numbers = [result]
        
        output.innerHTML = `<p>${result.toString()}</p><small>${string}</small>`
    })

    // EVENT LISTENER ON THE CLEAR BUTTON
    cBtn.addEventListener('click', (e) => {
        clear()
    })

    // EVENT LISTENRE ON THE DELETE BUTTN
    deleteBtn.addEventListener('click', (e) => {
        number = deleteLastCharacter(number)
        output.innerHTML = `<p>${number}</p><small>${string}</small>`
    })
}

// CLEAR EVERYTHING FUNCTION
function clear() {
    string = ""
    numbers = []
    result = 0
    number = ""
    output.innerHTML = `<p>${result}</p><small></small>`
}

// DELETE LAST CHARACTER FUNCTION
function deleteLastCharacter(str) {
    let newStr = str.substring(0, str.length -1)
    str = newStr
    return str
}