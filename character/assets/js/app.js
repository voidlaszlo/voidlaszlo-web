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

// FUNCTIONS
clear()
function registerEventListeners() {

    // EVENT LISTENER ON THE OPERATOR BUTONS
    for(button of operatorBtns) {
        button.addEventListener('click', (e) => {

            if(number == "") {
                operator = e.target.innerText
                string += `${number} ${operator} `
                prevOps.innerText = string
                console.log("hey its nohing")
            } else {
                
                operator = e.target.innerText
                numbers.push(number)
                string += `${number} ${operator} `
                prevOps.innerText = string
                number = ""

            }
        })
    }

    // EVENT LISTENER ON THE NUMBER BUTONS
    for(button of numberBtns) {
        button.addEventListener('click', (e) => {
                        
            if(result !== 0 && number == "" && operator == "") {
                string = ""
                numbers = []
                result = 0
                number += e.target.innerText
                output.innerHTML = `<p>${number}</p><small>${string}</small>`
            } else if(numbers.length >= 1 && number == "") {
                number += e.target.innerText
                output.innerHTML = `<p>${number}</p><small>${string}</small>`
            } else {
                number += e.target.innerText
                output.innerHTML = `<p>${number}</p><small>${string}</small>`
            }

        })
    }

    // EVENT LISTENER ON THE EQUALS BUTTON
    equals.addEventListener('click', (e) => {
        result = 0
        numbers.push(number)
        console.log("Pushed")

        switch(operator) {
            case "+":
                for(let number of numbers) {
                    result += parseInt(number)
                    console.log(result)
                }
                output.innerText = result
                string += `${number} = ${result}`
                operator = ""
                number = ""
                break

            case "-":
                for(let i = 0; i < numbers.length; i++) {
                    if(i == 0) {
                        result = numbers[i]
                    } else {
                        result -= numbers[i]
                    }
                }
                output.innerText = result
                string += `${number} = ${result}`
                operator = ""
                number = ""
                break
        }

        numbers = [result]
        
        output.innerHTML = `<p>${result.toString()}</p><small>${string}</small>`
        console.log("The numbers array is " + numbers + " The result is : " + result)
    })

    // EVENT LISTENER ON THE CLEAR BUTTON
    cBtn.addEventListener('click', (e) => {
        clear()
    })

    // EVENT LISTENRE ON THE DELETE BUTTN
    deleteBtn.addEventListener('click', (e) => {
        number = deleteLastCharacter(number)
        output.innerHTML = `<p>${number}</p>`
    })

}

function clear() {
    numbers = []
    result = 0
    number = ""
    output.innerHTML = `<p>${result}</p>`
}

function deleteLastCharacter(str) {
    let newStr = str.substring(0, str.length -1)
    str = newStr
    return str
}

registerEventListeners()