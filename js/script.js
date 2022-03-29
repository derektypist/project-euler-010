// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>5000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 5000000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of the primes below ${num} is ${primeSummation(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the sum of all the primes below n
    primeSummation(10) returns 17
    primeSummation(17) returns 41
*/
function primeSummation(n) {

    let sumPrimes;
   
    if (n>2) {
        sumPrimes = 2;
    } else {
        return 0;
    }
    for (let i=3;i<=Math.floor(Math.sqrt(n));i+=2) {
        if (isPrime(i)) sumPrimes += i;
    }

    return sumPrimes;
}

/*
    Function to Represent Primality of number n
    function isPrime(2) returns true
    function isPrime(9) returns false
*/
function isPrime(n) {
    if (n<2) return false;
    if (n==2) return true;
    if (n>2 && n%2==0) return false;
    for (let i=3;i<=Math.floor(Math.sqrt(n));i+=2) {
        if (n%i==0) return false;
    }
    return true;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}