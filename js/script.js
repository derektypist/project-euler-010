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
    let isPrime = Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i=2;i<=Math.sqrt(n-1);i++) {
        if (isPrime[i]) {
            for (let j=i*i;j<n;j+=i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((sum,prime,index) => prime ? sum + index : sum,0);
}