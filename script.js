const billValue = document.getElementById('bill');
const personValue = document.getElementById('person');
const percentageButtons = document.querySelectorAll('.my-4 button');
const customValue = document.querySelectorAll('.my-4 input');
const resetButton = document.getElementById('reset');

let amount = 0.0;
let total = 0.0;

function showAns(percentage) {
    const bill = billValue.value.trim();
    const person = personValue.value.trim();

    if (!dataIsValid('bill', bill) || !dataIsValid('person', person)) {
        console.log("Invalid input");
        alert("Invalid input");
        return;
    }

    const buttonContent = percentage.trim();
    const numberOnly = parseInt(buttonContent.replace(/\D/g, ""), 10);

    if (isNaN(numberOnly)) {
        console.log("Percentage value is incorrect");
        return;
    }

    amount = ((numberOnly) / 100 * bill) / person;
    total += amount;

    const amountBox = document.getElementById('amount');
    const totalBox = document.getElementById('total');

    amountBox.innerHTML = amount.toFixed(2);
    totalBox.innerHTML = total.toFixed(2);
    console.log('Amount: ', amount.toFixed(2));
    console.log('Total: ', total.toFixed(2));
}


const validations = {
    bill: (value) => {
        const num = Number(value);
        return value.trim() !== "" && !isNaN(num) && num > 0;
    },
    person: (value) => {
        const num = Number(value);
        return value.trim() !== "" && !isNaN(num) && num > 0;
    }
};

const dataIsValid = (key, value) => {
    return validations[key](value);
}

function reset(){
  window.location.reload();
}

percentageButtons.forEach((button) => {
    button.addEventListener('click', () => showAns(button.textContent));
});

resetButton.addEventListener('click', reset);