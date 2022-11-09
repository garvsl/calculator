
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
let opnum = 0;
let ogbutcounter = 0;
let butcounter = 0;
let afterbutcounter = 0;


for(let i = 0; i < buttons.length; i++){
    function buttonPress(e){

        if(buttons[i].textContent == 'C'){
            output.textContent = ''
            result.textContent = ''
            initial = ''
            after = ''
            operator = 'unchecked'
            secondop = 'unchecked'
            num = 0;
            opnum = 0;
            equals = 'undefined'
            ogbutcounter = 0;
            butcounter = 0;
            afterbutcounter = 0;
            

            //create a counter for the period for initial and after
        }else{
            if(buttons[i].textContent != '=' && buttons[i].textContent != operator ){
                
                if(ogbutcounter < 1 && buttons[i].textContent == '.'){
                    ogbutcounter++
                    output.textContent += buttons[i].textContent
                }else if(buttons[i].textContent != '.'){
                    output.textContent += buttons[i].textContent
                }
                
            }

            if(buttons[i].textContent == '.' || /^[0-9]+$/.test(buttons[i].textContent)){
                if(operator == 'unchecked'){

                    if(butcounter < 1 && buttons[i].textContent == '.'){
                        butcounter++
                        initial += (buttons[i].textContent)
                    }else if(buttons[i].textContent != '.'){
                        initial += (buttons[i].textContent)
                    }
                    
                }else{

                    if(afterbutcounter < 1 && buttons[i].textContent == '.'){
                        afterbutcounter++
                        after += (buttons[i].textContent)
                    }else if(buttons[i].textContent != '.'){
                        after += (buttons[i].textContent)
                    }
                    
                   
                }

            }else if(!/^[0-9]+$/.test(buttons[i].textContent) && buttons[i].textContent != '=' && buttons[i].textContent != '.' ){
                operator = buttons[i].textContent
                num++
                opnum++
                ogbutcounter = 0;
                butcounter = 0;
                afterbutcounter = 0;

            }
            if(num == 1){
                secondop = operator;
            } 
            
        }

        //this gets run if someone pressed equal sign
   
        if(buttons[i].textContent == '=' && opnum == 1){
     

            if(operator == '×'){
                answer = result.textContent = (Number(initial) * Number(after)).toFixed(2);
            }
            if(operator == '+'){
                answer = result.textContent = (parseFloat(initial) + parseFloat(after)).toFixed(2);
                
            }
            if(operator == '÷'){
                answer = result.textContent = (Number(initial) /   Number(after)).toFixed(2);
            }
            if(operator == '−'){
                answer = result.textContent = (Number(initial) -   Number(after)).toFixed(2);
            }
            if(operator == '∧'){
                answer = result.textContent = (Number(initial) **   Number(after)).toFixed(2);
            }
            if(operator == '%'){
                answer = result.textContent = (initial / 100).toFixed(2);
            }
        

            
            

        }


        //this is regular operation which happens after an operator is pressed the secon dtime

        if(num == 2 && opnum == 2){    
            if(secondop == '×'){
                result.textContent = (Number(initial) * Number(after)).toFixed(2);
                equals =  (Number(initial) * Number(after)).toFixed(2);
            }   
            if(secondop == '+'){
                result.textContent = (parseFloat(initial) + parseFloat(after)).toFixed(2);
                equals =  (parseFloat(initial) + parseFloat(after)).toFixed(2);
            }
            if(secondop == '÷'){
                result.textContent = (Number(initial) /   Number(after)).toFixed(2);
                equals =  (Number(initial) /   Number(after)).toFixed(2);
            }
            if(secondop == '−'){
                result.textContent = (Number(initial) -   Number(after)).toFixed(2);
                equals = (Number(initial) -   Number(after)).toFixed(2);
            }
            if(secondop == '∧'){
                result.textContent = (Number(initial) **   Number(after)).toFixed(2);
                equals =  (Number(initial) **   Number(after)).toFixed(2);
            }
            if(secondop == '%'){
                result.textContent = (initial / 100).toFixed(2);
            }

        }

        //this is run the second time someone presses another operator

        if(opnum == 1   && num == 2){

            if(secondop == '×'){
                result.textContent = (Number(equals) * Number(after)).toFixed(2);
                equals = ( Number(equals) * Number(after)).toFixed(2);
            }
            if(secondop == '+'){
                result.textContent = (parseFloat(equals) + parseFloat(after)).toFixed(2);
                equals = ( parseFloat(equals) + parseFloat(after)).toFixed(2);
            }
            if(secondop == '÷'){
                result.textContent =( Number(equals) /   Number(after)).toFixed(2);
                equals =  (Number(equals) /   Number(after)).toFixed(2);
            }
            if(secondop == '−'){
                result.textContent =( Number(equals) -   Number(after)).toFixed(2);
                equals = (Number(equals) -   Number(after)).toFixed(2);
            }
            if(secondop == '∧'){
                result.textContent = (Number(equals) **   Number(after)).toFixed(2);
                equals =  (Number(equals) **   Number(after)).toFixed(2);
            }
            if(secondop == '%'){
                result.textContent = (equals / 100).toFixed(2);
            }
            initial = '';
            after = '';
            num = 1;
            opnum = 0;

            output.textContent = equals + operator
        }
        //this is supposed to be run when someone pressed operator after having an
        //answer
        if((buttons[i].textContent == '=' && opnum == 0) ){
        

            if(operator == '×'){
                result.textContent = (Number(equals) * Number(after)).toFixed(2);
                equals = result.textContent = (Number(equals) * Number(after)).toFixed(2);
                
            }
            if(operator == '+'){
                result.textContent = (parseFloat(equals) + parseFloat(after)).toFixed(2);
                equals = result.textContent = (parseFloat(equals) + parseFloat(after)).toFixed(2);
            }
            if(operator == '÷'){
               result.textContent =( Number(equals) /   Number(after)).toFixed(2);
               equals = result.textContent =( Number(equals) /   Number(after)).toFixed(2);
            }
            if(operator == '−'){
                result.textContent = (Number(equals) - Number(after)).toFixed(2);
                equals =  result.textContent = (Number(equals) - Number(after)).toFixed(2);
            }
            if(operator == '∧'){
                result.textContent = (Number(equals) **   Number(after)).toFixed(2);
                equals =  result.textContent =( Number(equals) **   Number(after)).toFixed(2);  
            }
            if(operator == '%'){
                result.textContent = (equals / 100).toFixed(2);
                equals = result.textContent = (equals / 100).toFixed(2);
            }
          
        }

        if(opnum == 2){
            initial = '';
            after = '';
            num = 1;
            opnum = 0;
            
            output.textContent = equals + operator
        }
        

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
//after is wrong and output is not outputitng
    
    }   
    buttons[i].addEventListener('click', buttonPress);

    

}