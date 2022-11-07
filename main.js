function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    let result = operator.toLowerCase()
    if(result == 'add'){
        return add(a, b)
    }else if(result == 'subtract'){
        return subtract(a, b)
    }else if(result == 'multiply'){
        return multiply(a, b)
    }if(result == 'divide'){
        return divide(a, b)
        
    }
    
}

const buttons = document.querySelectorAll('.row div')
const output = document.querySelector('.output');
const result = document.querySelector('.result')

let pressed;
let operator;
let temp;
let answer;
for(let i = 0; i < buttons.length; i++){
    function buttonPress(e){
        if(buttons[i].textContent == 'C'){
            output.textContent = '0'
            result.textContent = ''
        }else{
            output.textContent += buttons[i].textContent
            if(/^[0-9]+$/.test(buttons[i].textContent)){
                temp = pressed;
                pressed = buttons[i].textContent 
            }else{
                operator = buttons[i].textContent 
            }
            
        }
        console.log(pressed + operator + temp)
        console.log(pressed)
        console.log(operator)
        
    
        if(output.textContent.length > 15){
            output.textContent = 'ERROR'
        }


    }
    buttons[i].addEventListener('click', buttonPress);

}
//5x4