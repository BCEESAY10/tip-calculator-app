const billValue = document.getElementById('bill');
const personValue = document.getElementById('person');
const percentageButtons = document.querySelectorAll('.my-4 button');

let amount = 0.00;
let total = 0.00;

function showAns(percentage) {
    let bill = billValue.value.trim();
    let person = personValue.value.trim();
    console.log('Amount: ', percentage);

    if (dataIsValid('bill', bill) && dataIsValid('person', person)) {
        const buttonContent = percentage.trim();
        const numberOnly = parseInt(buttonContent.replace(/\D/g, ""), 10);
        amount = ((numberOnly)/100 * bill)/person;
        console.log('Amount: ', amount);
    } else {
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
    button.addEventListener('click', () => showAns(button.textContent));
});