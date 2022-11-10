
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
let equalcancel = false;
let currentnum;
let nextnum;
let text;
let remove;
let initialremove;
let initialpop;
let nextremove;
let nextpop;
let array;
let newarray;
let test;
let neg;

//change exponent to positive/negative sign


for(let i = 0; i < buttons.length; i++){
    window.addEventListener('keyup', (e) => {
        test = e.key
        if(e.key == 'Backspace'){
            test = 'DEL'
        }
        if(e.key == 'Enter'){
            test = '='
        }
        if(e.key == 'c'){
            test = 'C'
        }
        if(e.key == '*' || e.key == 'x'){
            test = '×'
        }
        if(e.key == '-'){
            test = '−'
        }
        if(e.key == '?'){
            test = '÷'
        }
        if(test == buttons[i].textContent){
            buttonPress()
            
        }
        
    })
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
            neg = 0
            equalcancel = false;
            
        }else if(buttons[i].textContent == 'DEL'){
            //if its null or zero dont do
            text = output.textContent.split("")
            remove = text.pop()
            output.textContent = text.join('')
            if(remove == nextnum){
                nextremove = after.split("")
                nextpop  = nextremove.pop()
                after = nextremove.join('')
            }else if(remove == currentnum){
                initialremove = initial.split("")
                initialpop  = initialremove.pop()
                initial = initialremove.join('')
            }
        
            output.textContent = text.join("")


        }else if(buttons[i].textContent == '+/−'){
            array = output.textContent.split(operator)

            if(operator != 'unchecked'){
 
                


               
                if(neg == 1){
                    neg = 0;
                    after *= -1
                    array[1] = after
                    output.textContent = array.join(operator);
                }else if(neg != 1){
                    neg = 1;
                    after *= -1;
                    array[1] = after
                    output.textContent = array.join(operator);
                    
                }
              
                
            }else{
         
                if(neg == 1){
                    
                    initial *= -1
                    
                    array[0] = initial
                    neg = 0;
                    output.textContent = array.join('')

                }else if(neg != 1){
            

                    neg = 1;
                    initial *= -1
                    array[0] = initial
                    output.textContent = array.join('')
                }
            }
   
            

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
                        currentnum = buttons[i].textContent
      
                    }else if(buttons[i].textContent != '.'){
                        currentnum = buttons[i].textContent
                        initial += (buttons[i].textContent)
             
                    }
                    
                }else{

                    if(afterbutcounter < 1 && buttons[i].textContent == '.'){
                        afterbutcounter++
                        after += (buttons[i].textContent)
                        nextnum =  buttons[i].textContent
                    }else if(buttons[i].textContent != '.'){
                        after += (buttons[i].textContent)
                        nextnum =  buttons[i].textContent
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
                result.textContent = (Number(initial) * Number(after)).toFixed(2);
                equals = (Number(initial) * Number(after)).toFixed(2);
            }
            if(operator == '+'){
                result.textContent = (parseFloat(initial) + parseFloat(after)).toFixed(2);
                equals = (parseFloat(initial) + parseFloat(after)).toFixed(2);
                
            }
            if(operator == '÷'){
                result.textContent = (Number(initial) /   Number(after)).toFixed(2);
                equals = (Number(initial) /   Number(after)).toFixed(2);
            }
            if(operator == '−'){
                result.textContent = (Number(initial) -   Number(after)).toFixed(2);
                equals = (Number(initial) -   Number(after)).toFixed(2);
            }
            if(operator == '∧'){
                result.textContent = (Number(initial) **   Number(after)).toFixed(2);
                equals = (Number(initial) **   Number(after)).toFixed(2);
            }
            if(operator == '%'){
                result.textContent = (initial / 100).toFixed(2);
                equals = (initial / 100).toFixed(2);
            }

            equalcancel = true

            
            
            
        
            
            
            

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
   
        if(opnum == 2 || num == 2){
            initial = '';
            after = '';
            num = 1;
            opnum = 0;
            
            output.textContent = equals + operator
            result.textContent = ''
        }

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

            output.textContent = equals + operator

            
        }
        // this is supposed to be run when someone pressed operator after having an
        // //answer
        if((buttons[i].textContent == '=' && opnum == 0) ){
        

            if(operator == '×'){
                result.textContent = (Number(equals) * Number(after)).toFixed(2);
                equals = (Number(equals) * Number(after)).toFixed(2);
                
            }
            if(operator == '+'){
                result.textContent = (parseFloat(equals) + parseFloat(after)).toFixed(2);
                equals = (parseFloat(equals) + parseFloat(after)).toFixed(2);
            }
            if(operator == '÷'){
               result.textContent =( Number(equals) /   Number(after)).toFixed(2);
               equals = ( Number(equals) /   Number(after)).toFixed(2);
            }
            if(operator == '−'){
                result.textContent = (Number(equals) - Number(after)).toFixed(2);
                equals =  (Number(equals) - Number(after)).toFixed(2);
            }
            if(operator == '∧'){
                result.textContent = (Number(equals) **   Number(after)).toFixed(2);
                equals = (Number(equals) **   Number(after)).toFixed(2);  
            }
            if(operator == '%'){
                result.textContent = (equals / 100).toFixed(2);
                equals = (equals / 100).toFixed(2);
            }

            equalcancel = true
        

 
          
        }


        

        if(output.textContent.length > 15){
            output.textContent = 'ERROR'
        }

        if(result.textContent == 'Infinity'){
            result.textContent = 'Thats not allowed!'
        }




//add click effect

//add keyboard support

//goto commit or just see whats causing it to be like this..
    
    }   
    buttons[i].addEventListener('click', buttonPress);

    

}