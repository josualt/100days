let productNameInputElement = document.getElementById('username');
let remainingCharsElement = document.getElementById('remaining-chars');

function updateRemainingCharacters(event) {

    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    console.log(enteredText)
    let remainingCharacters =  60 - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
