//define DOM elements
const textGenerator = document.querySelector('.text-generator');
const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');

//define animation settings
const symbols = ['!', '"', '£', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
const symbolsLength = symbols.length;
const time = 1500;

/*UNTIL THE END OF TIME, CARACTHERS WILL CHANGE ONE AT TIME IN A SYMBOL.
THEN WILL CHANGE ONE AT TIME IN THE PROPER LETTER.*/

//define animation function
const handleClick = () => {
    const text = textInput.value;
    const textLength = text.length;
    //Generate symbols for any text-caracther
    let cryptoText = [];
    for (let i = 0; i < textLength; i++) {
        //Take a random symbol from symbols and push it to cryptoText
        const index = Math.floor(Math.random() * symbolsLength);
        cryptoText.push(symbols[index]);
        console.log(cryptoText.join(''));
    }
    //Display the string into DOM
    let string = cryptoText.join('');
    textGenerator.innerHTML = string;

    // textGenerator.innerHTML = text;
};

button.addEventListener('click', handleClick);