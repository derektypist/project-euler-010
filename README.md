# Project Euler 010 - Summation of Primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

The aim is to find the sum of the primes below a certain number (e.g. 2 million), using HTML Forms to input Numbers and JavaScript.

Information at [Project Euler 010](https://projecteuler.net/problem=10)

## UX

**Getting Started**

Enter a whole number between 2 and 5000000 in the input field and click on the Submit Button.  You will see the number you have entered as well as the sum of the primes below that number, unless you have made an invalid input.  For example, if you entered 10, the sum of the primes below 10 is 17.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an invalid input, if I do any of:

- Not anter anything in the input field
- Entering text that is not a number (e.g. bus)
- Entering a number less than 2 or greater than 5000000
- Entering a number, but it is not an integer

As a user, I expect the function `primeSummation(17)` to return a number.

As a user, I expect the function `primeSummation(17)` to return 41.

As a user, I expect the function `primeSummation(2001)` to return 277050.

As a user, I expect the function `primeSummation(140759)` to return 873608362.

As a user, I expect the function `primeSummation(2000000)` to return 142913828922.

**Information Architecture**

The function `primeSummation(n)` returns a number (integer), where n is a number between 2 and 5000000.

