console.log('client.js is sourced!');

function formSubmit(event) {
    event.preventDefault();

};

// Setting a global variable
let operator = '';


// This function will cature the add operator
// when clicked
function addBtn() {
    operator = '+';
  console.log(operator);
  return operator;
 
 
};

// This function will cature the subtract operator
// when clicked
function subtractBtn() {
    operator = '-';
  console.log(operator);
  return operator;
 
 
};

//This function will cature the multiply operator
// when clicked
function multiplyBtn() {
    operator = '*';
  console.log(operator);
  return operator;
 
 
};

/// This function will cature the divide operator
// when clicked
function divideBtn() {
    operator = '/';
  console.log(operator);
  return operator;
 
 
};

// The equal button Captures the numbers from the inputs to send to the server
   // within the equal button it should cature the value from the inputs
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
            
            
        };
    
        console.log('Testing equalsBtn', equals);

    axios({
        method: 'POST',
        url: '/calculations',
        data: equals
    }).then((response) => {
        getResults();
        console.log('response.data',response.data)
        // alert function for inputs    
    }).catch(function(error) {
        alert('You must enter a number, that is the way 📟');
        console.log('Testing alert function', error);
    })
   
};

 // Setting up a function getResults to get results from the server via GET route
function getResults() {
    axios({
        method: 'GET',
        url: '/calculations'
    }).then((response) =>{
        console.log('response.data:', response.data);
        renderResults(response.data)
         // alert function for inputs  
     }).catch(function(error) {
        alert('You must enter a number, that is the way 📟');
        console.log('Testing alert function', error);
    })

};

getResults();


// Set up render function to diplay the most recent result with a <h2> and history with <li>

function renderResults(results) {
    console.log(results);
    let resultHistory = document.getElementById('resultHistory');
    console.log(resultHistory);
    resultHistory.innerHTML = '';
    
    // Looping through results history
    for(let i = 0; i < results.length; i++) {
        resultHistory.innerHTML += `

        <li>${results[i].numOne}
        ${results[i].operator}
        ${results[i].numTwo} =
        ${results[i].result}</li>
        `;
    }
        let recentResult = document.getElementById('recentResult');
        recentResult.innerHTML = '';
        let lastResult = results.slice(-1);
        recentResult.innerHTML += `
        <h2>${lastResult[0].result}</h2>`
        console.log('testing the render', lastResult, results);
    

};


// When first number is enetered we want the input to claer
    // after the equals or clear button is clicked
function clearBtn(){
    document.getElementById('first-num').value = '';
    document.getElementById('second-num').value = '';
    
};






