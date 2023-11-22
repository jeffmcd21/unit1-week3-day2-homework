
// ----- *** JavaScript Problems Potpourri *** ----- //


// ----- setAlarm ----- //

// Creating a function with arguements of employed and vacationing
function setAlarm(employed, vacationing) {
    // Using an if statement and setting condiditions to the arguements where employed is true and vacationing is false. 
    if (employed === true && vacationing === false) {
        // Then return true -- set that alarm.
        return (`${true}, Set the alarm`)
        // Otherwise
    } else {
        // Return false -- alarm off and sleep in.
        return false
    }
}

// Check function by setting args emplpyed to true and vaca to true
console.log(setAlarm(true, true)) // => returns false
// Check function by setting args emplpyed to false and vaca to false
console.log(setAlarm(false, false)) // => returns false
// Check function by setting args emplpyed to false and vaca to true
console.log(setAlarm(false, true)) // => returns false
// Check function by setting args emplpyed to true and vaca to false
console.log(setAlarm(true, false)) // => returns true






// ----- Count Odd Numbers ----- //

// Create a function and give it an arguement object.
const oddNumberCount = function(num) {
    // Use and if statement to stipulate the conditions.
    if (num >= 0 || (num % 2 !== 0))
    // Round down to the nearest integer and divide the input value by 2
    return Math.floor(num / 2); 
    // Return 0 if the above conditions aren't met
    return 0; 
    
}
// Log the function and give the a value to the arguement object
console.log(oddNumberCount(10)) // Enter integer or float value inside parenthesis





// ----- Disemvoweling Trolls ----- //

// Assign the function a variable name trollsBeGone and an arguement in form of a string
const trollsBeGone = function(str) {
    // Assigning a string value to the arguement
    str = "Trolls are weird and look silly"
    // Replace the vowels with blank
    return str.replace(/[aeiou]/gi, '')
}
// Log the results
console.log(trollsBeGone())





// ----- Bank Account Summary ----- //

// Create an object with banking info as the keys
const bankInfo = {
    savings: 25,
    checking: 100,
    moneyMarket: 75,
    creditCard: -3500
}

// Create a function and give it an arguement of bankInfo
function bankAccountSummary(bankInfo) {    
    // Create a variable to aggrigate the bank balance, with a starting value of 0
    let bankTotal = 0;
    // Iterate through each key pair in the bankInfo object
    for(let bk in bankInfo) {
        // Add each item to the bankTotal variable
        bankTotal += bankInfo[bk]
    }
    return bankTotal
}
// Log the results of the function
console.log("Net Worth =", bankAccountSummary(bankInfo))
// Store the results of the function into the variable bankInfo
let bankTotal = bankAccountSummary(bankInfo)

// Create another function that evaluates if the variable bankTotal, used as an arguement is less than 0 or not.
function inTheRed(bankTotal) {
    if (bankTotal < 0) {
      return true;
    } else {
      return false;
    }
  }

// Log the results of the if statement
console.log("Life is a financial disaster:", inTheRed(bankTotal));