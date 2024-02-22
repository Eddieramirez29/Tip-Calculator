window.onload = function()
{
// Get every ID button.
let boton5 = document.getElementById('boton1');
let boton15 = document.getElementById('boton2');
let boton50 = document.getElementById('boton3');
let boton10 = document.getElementById('boton4');
let boton25 = document.getElementById('boton5');

//Get ID reset Button
let reset = document.getElementById('reset');

//Get input ID
let totalCash = document.getElementById('totalCash');
let amountOfPeople = document.getElementById('amountOfPeople');


//Get warnings ID
let warning1 = document.getElementById('warning1');
let warning2 = document.getElementById('warning2');

let percentage;

//Get tip and total ID.
let totalTipPerPerson = document.getElementById('amount');
let totalPerPerson = document.getElementById('grandTotal');
let custom = document.getElementById('custom');

// Agrega un evento de clic a cada botón
boton5.addEventListener('click', function()
{
    percentage = 0.05;
    verifyInput();
});

boton15.addEventListener('click', function()
{
    percentage = 0.15;
    verifyInput();
});

boton50.addEventListener('click', function()
{
    percentage = 0.50;
    verifyInput();
});

boton10.addEventListener('click', function()
{
    percentage = 0.10;
    verifyInput();
});

boton25.addEventListener('click', function()
{
    percentage = 0.25;
    verifyInput();
});


// Add event listener for the keydown event
custom.addEventListener('keydown', function(event) 
{
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') 
    {
        // Get the input value and do something with it
        let inputValue = custom.value;
        console.log('Entered value:', inputValue);
        percentage = parseFloat(custom.value)/100;

        // You can call your function or perform any desired action here
        // For example, you might want to process the entered value
        if(percentage > 0 && percentage <= 1)
        {
            calculate();
        }
        else
        {
            alert('The value must be between 1 and 100');
        }
    }
});

// Function to process the entered value
function processInput(value)
{
    // Your logic to handle the entered value
    alert('Entered value: ' + value);
    // Add more code as needed
}

//Reset all fields
reset.addEventListener('click', function()
{
    rst();
});

//Reset function
function rst()
{
    totalTipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00";
    totalCash.value = "";
    amountOfPeople.value = "";
}

//Function to verify the input states
function verifyInput()
{
    let input1 = totalCash.value;
    let input2 = amountOfPeople.value;

    if(input1 === '' && input2 === '')
    {
        warning1.innerHTML = 'Can´t be zero';
        warning2.innerHTML = 'Can´t be zero';
    }
    else if(input1 === '')
    {
        warning1.innerHTML = 'Can´t be zero';
        warning2.innerHTML = '';
        
    }
    else if(input2 === '')
    {
        warning1.innerHTML = '';
        warning2.innerHTML = 'Can´t be zero';
    }
    else
    {
        warning1.innerHTML = '';
        warning2.innerHTML = '';
        calculate();
    }
}

function calculate()
{
    let bill = totalCash.value;
    let numberOfPeople = amountOfPeople.value;
    let tip = bill * percentage/numberOfPeople;
    let total = bill/numberOfPeople + tip;


    totalTipPerPerson.innerHTML = "$" + tip;
    totalPerPerson.innerHTML = "$" + total;
}
};