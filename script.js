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
    //create an array of the string to iterate each letter
    const inputString = textInput.value;
    const lettersArray = inputString.split('');

    //array of symbols to display in DOM
    const cryptedArray = [];
    const setCryptedArray = () => {
        for (let i = 0; i < lettersArray.length; i++) {
            cryptedArray.push(symbols[Math.floor(Math.random() * symbolsLength)]);
        }
        console.log('first array: ' + cryptedArray);
        textGenerator.innerHTML = cryptedArray.join('');
    }
    setCryptedArray();

    //animate the symbols string
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function processArray(array) {
        for (const letter of lettersArray) {
            //index of current letter
            const index = lettersArray.indexOf(letter);
            //add random symbol at proper index instead of current letter
            const symbolIndex = Math.floor(Math.random() * symbolsLength);
            const cryptedLetter = symbols[symbolIndex];
            cryptedArray[index] = cryptedLetter;
            console.log('new array: ' + cryptedArray);
            //display the new string
            textGenerator.innerHTML = cryptedArray.join('');
            //await N ms to iterate
            await delay(1000); 
        }
    }

    processArray(lettersArray);


    const stopInterval = () => {
        clearInterval(animationInterval);
    }
    
};

button.addEventListener('click', handleClick);