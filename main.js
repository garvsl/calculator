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
let num = 0;
let secondop = 'unchecked'
let equals;
let newop;


for(let i = 0; i < buttons.length; i++){
    function buttonPress(e){
        // if(result.textContent != ''){
        //     output.textContent = ''
        //     result.textContent = ''
        //     initial = ''
        //     after = ''
        //     operator = 'unchecked'
        //     secondop = 'unchecked'
        //     num =0
            
        // }
        if(buttons[i].textContent == 'C'){
            output.textContent = ''
            result.textContent = ''
            initial = ''
            after = ''
            operator = 'unchecked'
            num = 0;

            
        }else{
            if(buttons[i].textContent != '=' && buttons[i].textContent != operator ){
                output.textContent += buttons[i].textContent
            }

            if(/^[0-9]+$/.test(buttons[i].textContent || buttons[i].textContent == '.')){
                if(operator == 'unchecked'){
                    initial += (buttons[i].textContent)
                }else{
                    after += (buttons[i].textContent)
                }
            }else if(!/^[0-9]+$/.test(buttons[i].textContent) && buttons[i].textContent != '=' && buttons[i].textContent != '.' ){
                operator = buttons[i].textContent

                num++

            }
            if(num == 1){
                secondop = operator;
            } 
            
        }



        let equalled = () => {

            if(num == 2 && secondop != 'unchecked'){
                console.log(secondop)

            num = 0
                if(secondop == '×'){
                    result.textContent = Number(initial) * Number(after)
                    equals =  Number(initial) * Number(after)
                }
                if(secondop == '+'){
                    result.textContent = parseFloat(initial) + parseFloat(after)
                    equals =  parseFloat(initial) + parseFloat(after)
                }
                if(secondop == '÷'){
                    result.textContent = Number(initial) /   Number(after)
                    equals =  Number(initial) /   Number(after)
                }
                if(secondop == '−'){
                    result.textContent = Number(initial) -   Number(after)
                    equals = Number(initial) -   Number(after)
                }
                if(secondop == '∧'){
                    result.textContent = Number(initial) **   Number(after)
                    equals =  Number(initial) **   Number(after)
                }
                if(secondop == '%'){
                    result.textContent = initial / 100
                }

            }
        }
        equalled();
        console.log(`operator: ${operator}`)
        console.log(`secondop: ${secondop}`)
        console.log(`initial: ${initial}`)
        console.log(`after: ${after}`)
        console.log(`num: ${num}`)

        if(operator != secondop && buttons[i].textContent == '='){
            if(operator == '×'){
                result.textContent = Number(equals) * Number(initial)
            }
            if(operator == '+'){
                result.textContent = parseFloat(equals) + parseFloat(initial)
            }
            if(operator == '÷'){
                result.textContent = Number(equals) /   Number(initial)
            }
            if(operator == '−'){
                result.textContent = Number(equals) -   Number(initial)
            }
            if(operator == '∧'){
                result.textContent = Number(equals) **   Number(initial)
            }
            if(operator == '%'){
                result.textContent = equals / 100
            }
        }
        

        // if(buttons[i].textContent == '='){
            
        //     if(num == 1 && secondop != 'unchecked'){
            
        //         if(operator == '×'){
        //             result.textContent = Number(initial) * Number(after)
        //         }
        //         if(operator == '+'){
        //             result.textContent = parseFloat(initial) + parseFloat(after)
        //         }
        //         if(operator == '÷'){
        //             result.textContent = Number(initial) /   Number(after)
        //         }
        //         if(operator == '−'){
        //             result.textContent = Number(initial) -   Number(after)
        //         }
        //         if(operator == '∧'){
        //             result.textContent = Number(initial) **   Number(after)
        //         }
        //         if(operator == '%'){
        //             result.textContent = initial / 100
        //         }

        //     }
            
        // }



        

        

        
    
        if(output.textContent.length > 15){
            output.textContent = 'ERROR'
        }
//do it that way which means iphone way which means after 
// each both numbers and operator are there then or a variable is true
//  then calculate and set the numbers back to inital
// and set one to the result 
//positive negative and delete 
//add click effect

//decimals dont work

//current one doesnt work cus u cant enter two numbers in after
//if number is 2 then use the result and operate it to whatever was entered
//

    }
    buttons[i].addEventListener('click', buttonPress);


}
//5x4