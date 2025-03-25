//define DOM elements
const textGenerator = document.querySelector('.text-generator');
const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');

//define animation settings
const symbols = ['!', '"', '£', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
const symbolsLength = symbols.length;

/*UNTIL THE END OF TIME, CARACTHERS WILL CHANGE ONE AT TIME IN A SYMBOL.
THEN WILL CHANGE ONE AT TIME IN THE PROPER LETTER.*/

//define animation function
const handleClick = () => {
    const text = textInput.value;
    const textLength = text.length;
    //Generate symbols for any text-caracther
    let intervalTimes = 6;
    const animationInterval = setInterval(() => {
        intervalTimes--;
        console.log(intervalTimes);

        if (intervalTimes === 0) {
            console.log('end ' + text);
            textGenerator.innerHTML = text;
            clearInterval(animationInterval);
        }

        if (intervalTimes !== 0) {
            let cryptoText = [];
        for (let i = 0; i < textLength; i++) {
            //Take a random symbol from symbols and push it to cryptoText
            const index = Math.floor(Math.random() * symbolsLength);
            cryptoText.push(symbols[index]);
        }
        //Display the string into DOM
        const string = cryptoText.join('');
        textGenerator.innerHTML = string;
        }
    }, 500)
};

button.addEventListener('click', handleClick);