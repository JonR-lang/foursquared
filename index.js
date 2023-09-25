const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const cardNumberInput = document.querySelector('#card-number');
const cardNameInput = document.querySelector('#cardholder-name');
const cardCVCInput = document.querySelector('#card-cvc');
const cardMonthInput =document.querySelector('#card-month');
const cardYearInput = document.querySelector('#card-year')
const numberOnCard = document.querySelector('.number-on-card');
const nameOnCard = document.querySelector('.name-on-card');
const monthOnCard = document.querySelector('.month-on-card');
const yearOncard = document.querySelector('.year-on-card');
const CVCOnCard = document.querySelector('.cvv-on-card');
const thankYou = document.querySelector('.thank-you-container');
const thankYouBtn = document.querySelector('.thank-you-button');


function isValid() {
    let validator = true;
    input.forEach(item => {
        removeErrorFor(item);
    })
    
    input.forEach(item => {
        if (item.value.trim() === '') {
            setErrorFor(item, 'Cant be blank');
            validator = false;
        } else if (isNaN(Number(cardNumberInput.value.trim()))) {
            setErrorFor(cardNumberInput, 'Wrong format, numbers only');
            validator = false;
        } else if (cardNumberInput.value.trim().length < 16) {
            setErrorFor(cardNumberInput, 'Please enter a sixteen digit number');
            validator = false;
        } else {
            setSuccessFor(item);
        }
    })
    return validator;
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numberOnCardJS = '';
    let cardNumber = cardNumberInput.value.trim();
    for (let i = 0; i < cardNumber.length; i++) {
        numberOnCardJS += cardNumber[i]
        if ((i + 1) % 4 === 0 && i !== cardNumber.length - 1) {
            numberOnCardJS += ' ';
        }   
    }

    if (cardNumberInput.value !== '') {
        numberOnCard.textContent = numberOnCardJS;
    }

    if (cardNameInput.value !== '') {
        nameOnCard.textContent = cardNameInput.value;
    }

    if (cardMonthInput.value !== '') {
        monthOnCard.textContent = cardMonthInput.value + '/';
    }

    if (cardMonthInput.value.length === 1) {
        monthOnCard.textContent = cardMonthInput.value.padStart(2, 0);
    }

    if (cardYearInput.value !== '') {
        yearOncard.textContent = cardYearInput.value;
    }

    if (cardYearInput.value.length === 1) {
        yearOncard.textContent = cardYearInput.value.padStart(2, 0);
    }

    if (cardCVCInput.value !== '') {
        CVCOnCard.textContent = cardCVCInput.value;
    }

   
    
    
    if (isValid()) {
        form.style.display = 'none';
        thankYou.style.display = 'flex'
    }

    
})


thankYouBtn.addEventListener('click', () => {
    thankYou.style.display = 'none';
    form.style.display = 'grid';
    input.forEach(item => {
        item.value = '';
    })
    numberOnCard.textContent = '0000 0000 0000 0000';
    nameOnCard.textContent = 'Jane Appleseed';
    monthOnCard.textContent = '00' + '/';
    yearOncard.textContent = '00';
    CVCOnCard.textContent = '000';

})





function setErrorFor(input, error) {
    const inputControl = input.parentElement;
    const errorMessage = inputControl.querySelector('.error-message');
    errorMessage.textContent = error;
    input.classList.add('active');
}

function setSuccessFor(input) {
    const inputControl = input.parentElement;
    const errorMessage = inputControl.querySelector('.error-message');
    errorMessage.textContent = '';
    input.classList.remove('active');
}

function removeErrorFor(input) {
    const inputControl = input.parentElement;
    const errorMessage = inputControl.querySelector('.error-message');
    errorMessage.textContent = '';
    input.classList.remove('active');
}



