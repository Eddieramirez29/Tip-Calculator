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

//Reset all fields
reset.addEventListener('click', function()
{
    reset();
});

//Reset function
function reset()
{
    totalTipPerPerson.innerHTML = "";
    totalPerPerson.innerHTML = "";
    totalCash.value = "";
    amountOfPeople.value = "";
}

//Function to verify the input states
function verifyInput()
{
    let input1 = totalCash.value;
    let input2 = amountOfPeople.value;

    if((input1 === 0 && input2 === 0) || (input1 === '' && input2 === ''))
    {
        warning1.innerHTML = 'Can´t be zero';
        warning2.innerHTML = 'Can´t be zero';
    }
    else if(input1 === 0 || input1 === '')
    {
        warning1.innerHTML = 'Can´t be zero';
        warning2.innerHTML = '';
        
    }
    else if(input2 === 0 || input2 === '')
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
    alert("$" + tip);
    alert("$" + total);

}