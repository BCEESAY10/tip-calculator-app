const billValue = document.getElementById('bill');
const personValue = document.getElementById('person');
const percentageButtons = document.querySelectorAll('.my-4 button');

let amount = 0.0;
let total = 0.0;

function showAns(percentage) {
    let bill = billValue.value.trim();
    let person = personValue.value.trim();

    if (!dataIsValid('bill', bill) || !dataIsValid('person', person)) {
        console.log("Invalid input");
        alert("Invalid input");
        return;
    }

    const buttonContent = percentage.trim();
    const numberOnly = parseInt(buttonContent.replace(/\D/g, ""), 10);

    if (isNaN(numberOnly)) {
        console.log("Percentage value is incorrect");
        alert("We shall fix the custom value soon!!!")
        return;
    }

    amount = ((numberOnly) / 100 * bill) / person;
    total += amount;
    console.log('Amount: ', amount.toFixed(2));
    console.log('Total: ', total.toFixed(2));
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