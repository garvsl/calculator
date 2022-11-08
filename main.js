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





for(let i = 0; i < buttons.length; i++){
    function firstEvent(){
        if(buttons[i].textContent == 'C'){
            output.textContent = ''
            result.textContent = ''
        }
        if(buttons[i].textContent == "." || /^[0-9]+$/.test(buttons[i].textContent)){
            output.textContent += buttons[i].textContent
            console.log('goodbye')
        }else if(!/^[0-9]+$/.test(buttons[i].textContent) && buttons[i].textContent != '=' && buttons[i].textContent != '.' && buttons[i].textContent != 'C'){
            buttons[i].removeEventListener('click', firstEvent)
            buttons[i].addEventListener('click', secondEvent)
            output.textContent += buttons[i].textContent

        }
    }
    function secondEvent(){
        if(buttons[i].textContent == 'C'){
            output.textContent = ''
            result.textContent = ''
        }
        if(buttons[i].textContent == "." || /^[0-9]+$/.test(buttons[i].textContent)){
            output.textContent += buttons[i].textContent
            console.log('hello')
        }else if(!/^[0-9]+$/.test(buttons[i].textContent) && buttons[i].textContent != '=' && buttons[i].textContent != '.' && buttons[i].textContent != 'C'){
            buttons[i].removeEventListener('click', secondEvent)
            buttons[i].addEventListener('click', firstEvent)
            output.textContent += buttons[i].textContent
  
        }
    }

        buttons[i].addEventListener('click', firstEvent);
  
   
}



        

    
//do it that way which means iphone way which means after 
// each both numbers and operator are there then or a variable is true
//  then calculate and set the numbers back to inital
// and set one to the result 
//positive negative and delete 
//add click effect
//make sure they cant clikc signs twice

//decimals dont work

//current one doesnt work cus u cant enter two numbers in after
//if number is 2 then use the result and operate it to whatever was entered
//
//have them all in one big event handler

/*
This is the algorithm:

Make a click handler that is looped through by all the buttons
and have it so when you click a button it is placed into a firstvariable
and if an operator is pressed then the close the previus click handler and create another
in this new one repeat the same thign so that all numbers are looped
and any number clicked is placed into a secondvariable
inside the second click event have it check if another operator is pressed
if it is then have it rerun
outside everything have an if the equal button is pressed then just calculate or inside both
functions have that
have a while loop on all these

let firstnum = 0
let secondnum = 0

for loop

    function firstevent{
        if(button == operator){
            remove.eventlistener(firstevent)
            add.eventlistener(secondevent)
        }else{
            firstnum += Number(buttons[i])
        }
        
    }
        function secondevent{
        if(button == operator){
            remove.eventlistener(secondevent)
            add.eventListener(firstevent)
        }else{
            secondnum += number[buttons[i]]
        }
        
    }

    buttons[i] click firstevent
    buttons[i] click secondevent


    





*/