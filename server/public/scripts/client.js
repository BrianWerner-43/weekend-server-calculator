console.log('client.js is sourced!');

function formSubmit(event) {
    event.preventDefault();

};

function clearBtn(){
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    // When first number is enetered we want the input to claer
    // after the equals or clear button is clicked
};

// Creating a function for the addBtn so when clicked it will capture the user wants to use the add operator
 let operator = '';
function addBtn() {
    operator = '+';
  console.log(operator);
  return operator;
 
 
};

// This function will subtract
function subtractBtn() {
    operator = '-';
  console.log(operator);
  return operator;
 
 
};

//This function will multiply
function multiplyBtn() {
    operator = '*';
  console.log(operator);
  return operator;
 
 
};

// This function will divide
function divideBtn() {
    operator = '/';
  console.log(operator);
  return operator;
 
 
};

//  equal button Capture numbers from the inputs to send to the server
   // within the equal button should cature the value from the inputs
   // bundle up the inputs in an object
   // then send the object to the server via Post route

function equalsBtn() {
    let firstNumber = document.getElementById('first-num').value;
    let secondNumber = document.getElementById('second-num').value;
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';

     let equals = {
            numOne: Number(firstNumber),
            numTwo: Number(secondNumber),
            operator: operator
            
            
        }
    
    console.log('Testing equalsBtn', equals);

    axios({
        method: 'POST',
        url: '/calculations',
        data: equals
    }).then((response) => {
        getResults();
    })

};

// // Setting up a function getResults to get results from the server via GET route
function getResults() {
    axios({
        method: 'GET',
        url: '/calculations'
    }).then((response) =>{
        
        console.log('Testing the GET');
    })

};








