const billValue = document.getElementById('bill');
const personValue = document.getElementById('person');
const percentageButtons = document.querySelectorAll('button');

function showAns() {
    let bill = billValue.value.trim();
    let person = personValue.value.trim();

    if (dataIsValid('bill', bill) && dataIsValid('person', person)) {
        console.log("Bill: ", bill, " Person: ", person);
        // Show your answer here
    } else {
        // Optionally show an error message
        console.log("Invalid input");
    }
}

const validations = {
    bill: (value) => !!value.trim() || value.trim() == NaN,
    person: (value) => !!value.trim() || value.trim() == Nan
}

const dataIsValid = (key, value) => {
    return validations[key](value);
}

percentageButtons.forEach((button) => {
    button.addEventListener('click', showAns);
})