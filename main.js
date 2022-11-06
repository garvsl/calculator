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

//5x4