let operations = document.querySelector('.operations');
let result = document.querySelector('.result');

let operationsArr = Array.from(operations.children);
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let numberOne = '';
let numberTwo = '';
let chosenop = '';
let znak = '';
let firstNumber = true;

// addEventListener to all
operationsArr.forEach((e) =>{
  e.addEventListener('click', (e) => {

    if(numbers.includes(e.currentTarget.innerHTML)) 
    {
      addNumber(e);
    } else {
      switch(e.currentTarget.innerHTML) {
        case "%":
          //percentage
          firstNumber = false;
          chosenop = '%';
          znak = '%';
          numberOne = `${numberOne}${znak}`;
          result.innerHTML = numberOne;
          break;
          case "CE":
            //delete all numbers
            firstNumber = true;
            numberOne = '';
            numberTwo = '';
            chosenop = '';
            result.innerHTML = '0';
            break;
            case "DEL":
              //delete last number
              del();
              break;
              case "=":
                //equal
                resultFunc(chosenop);
                numberOne = result.innerHTML;
                numberTwo = '';
                chosenop = '';
                break;
                case "+":
                  //plus
                  firstNumber = false;
                  chosenop = '+';
                  znak = '+';
                  numberOne = `${numberOne}${znak}`;
                  result.innerHTML = numberOne;
                  break;
                  case "-":
                    // minus
                    if(numberOne == '') 
                    {
                      numberOne = '-';
                    } else 
                    {
                      znak = '-';
                      numberOne = `${numberOne}${znak}`;
                      result.innerHTML = numberOne;

                      numberTwo = '-';
                      firstNumber = false;
                      chosenop = '-';
                    }
                    break;
                    case "/":
                      // divide
                      firstNumber = false;
                      chosenop = '/';
                      znak = '/';
                      numberOne = `${numberOne}${znak}`;
                      result.innerHTML = numberOne;
                      break;
                      case "X":
                        // multiply
                        firstNumber = false;
                        chosenop = 'X';
                        znak = 'X';
                        numberOne = `${numberOne}${znak}`;
                        result.innerHTML = numberOne;
                        break;
                      case ".":
                        // dot
                        if(firstNumber) 
                        {
                          numberOne = `${numberOne}.`;
                          result.innerHTML = numberOne;
                        } else 
                        {
                          numberTwo = `${numberTwo}.`;
                          result.innerHTML = numberTwo;
                        }
                        break;
                  }
    }
  })
})


// save first number
function addNumberOne(broj) {
  numberOne = `${numberOne}${broj}`;
  result.innerHTML = numberOne;
}
// save second number
function addNumberTwo(broj) {
  numberTwo = `${numberTwo}${broj}`;
  result.innerHTML = numberTwo;
}

// adding numbers
function addNumber(broj) {
  if(firstNumber) 
  {
    if(result.innerHTML == '0' || result.innerHTML == '') 
    {
      if(broj.currentTarget.innerHTML == 0) 
      {
        // if target zero
      } else 
      {
        addNumberOne(broj.currentTarget.innerHTML);
      }
      
    } else 
    {
      addNumberOne(broj.currentTarget.innerHTML);
    }
  } else 
  {
    //if firstNumber = false
    if(numberTwo == '') 
    {
      if(broj.currentTarget.innerHTML == 0) 
      {
        // if target zero
      } else 
      {
        addNumberTwo(broj.currentTarget.innerHTML);
      }
      
    } else 
    {
      addNumberTwo(broj.currentTarget.innerHTML);
    }
  }
}

// display result
function resultFunc(chosenop) {
  
  switch(chosenop) 
  {
    case "+":
      numberOne = numberOne.slice(0, -1);
      sum = Number(numberOne) + Number(numberTwo);
      result.innerHTML = sum;
      break;
    case "-":
      if(numberOne.includes('-') && numberTwo.includes('-')) 
      {
        numberOne = numberOne.slice(0, -1);
        sum = Number(numberOne) - Number(-numberTwo);
        result.innerHTML = sum;
        break;
      } else if(numberTwo.includes('-')) 
      {
        numberOne = numberOne.slice(0, -1);
        sum = Number(numberOne) - Number(-numberTwo);
        result.innerHTML = sum;
        break;
      } else 
      {
        numberOne = numberOne.slice(0, -1);
        sum = Number(numberOne) - Number(numberTwo);
        result.innerHTML = sum;
        break;
      }
    case "X":
      numberOne = numberOne.slice(0, -1);
      sum = Number(numberOne) * Number(numberTwo);
      if(sum.toString().includes('.')) 
      {
        sum = sum.toFixed(2);
        result.innerHTML = sum;
      } else 
      {
        result.innerHTML = sum;
      }
      break;
    case "/":
      numberOne = numberOne.slice(0, -1);
      sum = Number(numberOne) / Number(numberTwo);
      if(sum.toString().includes('.')) 
      {
        sum = sum.toFixed(2);
        result.innerHTML = sum;
      } else 
      {
        result.innerHTML = sum;
      }
      break;
    case "%":
      percent();
      break;
  }
}

// delete last number
function del() {
  if(firstNumber) 
  {
    numberOne = numberOne.slice(0, -1);
    result.innerHTML = numberOne;
    if(result.innerHTML == '') 
    {
      numberOne = '';
      result.innerHTML = '0';
    }
    
  } else 
  {
    numberTwo = numberTwo.slice(0, -1);
    result.innerHTML = numberTwo;
    if(result.innerHTML == '') 
    {
      numberTwo = '';
      result.innerHTML = '0';
    }
  }
}

// percentage func
function percent() {
  var pPos = numberOne; 
  var pEarned = numberTwo;
  var perc="";
        if(isNaN(pPos) || isNaN(pEarned))
        {
          perc=" ";
        } else
          {
           perc = ((pEarned/pPos) * 100).toFixed(2);
           result.innerHTML = perc;
          }
}


