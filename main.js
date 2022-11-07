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


let operator = 'unchecked';
let answer;
let initial = '';
let after = '';


for(let i = 0; i < buttons.length; i++){
    function buttonPress(e){
        if(result.textContent != ''){
            console.log('penis')
            output.textContent = ''
            result.textContent = ''
            initial = ''
            after = ''
            operator = 'unchecked'
        }
        if(buttons[i].textContent == 'C'){
            output.textContent = ''
            result.textContent = ''
            initial = ''
            after = ''
            operator = 'unchecked'
        }else{
            output.textContent += buttons[i].textContent
            if(/^[0-9]+$/.test(buttons[i].textContent)){
                if(operator == 'unchecked'){
                    initial += (buttons[i].textContent)
                }else{
                    after += (buttons[i].textContent)
                }
            }else if(!/^[0-9]+$/.test(buttons[i].textContent) && buttons[i].textContent != '='){
                operator = buttons[i].textContent 


            }
            
        }

        if(buttons[i].textContent == '='){
            if(operator == '×'){
                result.textContent = initial*after
            }
        }

        

        

//USE AN ARRAY

        
    
        if(output.textContent.length > 15){
            output.textContent = 'ERROR'
        }


    }
    buttons[i].addEventListener('click', buttonPress);

}
//5x4