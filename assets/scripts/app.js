// alert('This works!');
const defaultResult = 0;
let currentResult=defaultResult;
let logEntries = [];

function getUserNumberInput(){
    return +userInput.value
}

function create(operator,resultBefore, calcNumber){
    const description = `${resultBefore} ${operator} ${calcNumber} =`
    outputResult(currentResult,description);
}

function createLog(operation,number1,number2,finalResult){
   const logEntry ={
    operation:operation,
    number1:number1,
    number2:number2,
    finalResult:finalResult
}
logEntries.push(logEntry);
    console.log(logEntry);

}

function calculateResult(calculationType) {
    
       if(
        calculationType !== 'ADD' &&
        calculationType !== 'MINUS' && 
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;
    }

    //if all arent true, return and end function. eles continue to read code
    
    const enteredNumber = getUserNumberInput();
    const initialResult= currentResult;
    let mathOp;

    if(calculationType === 'ADD'){
        currentResult +=  enteredNumber;
        mathOp = '+';
       
    } else if( calculationType === 'MINUS') {
        currentResult -= enteredNumber;
        mathOp = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult -= enteredNumber;
        mathOp = '*';

    }else if(calculationType === 'DIVIDE'){
        currentResult -= enteredNumber;
        mathOp = '/';
    }

 
    
    create(mathOp,initialResult, enteredNumber);
    createLog(calculationType,initialResult,enteredNumber,currentResult)
}



function add (){
   calculateResult('ADD') 
}

function minus(){
    calculateResult('MINUS')
}

function mulitply(){
    calculateResult('MULTIPLY')
}

function divide(){
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',minus);
multiplyBtn.addEventListener('click',mulitply);
divideBtn.addEventListener('click',divide);
