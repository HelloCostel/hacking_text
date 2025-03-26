//define DOM elements
const textGenerator = document.querySelector('.text-generator');
const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');

//define symbols
const symbols = ['!', '"', '£', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

//define animation function
const handleClick = () => {
    //create an array from the input string
    const stringArray = textInput.value.split('');
    
    //create the crypted string to display in DOM
    const cryptedArray = [];
    const setCryptedArray = (array) => {
        for (const letter of array) {
            cryptedArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
        }
        //display the string
        console.log('cryptedArray: ' + cryptedArray.join(''));
        textGenerator.innerHTML = cryptedArray.join('');
    }
    setCryptedArray(stringArray);

    //function to set animations delay
    const delaySpeed = 20;
    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //manage the animation process:
        //arrayOne      --> array that needs to be changed;
        //arrayTwo      --> array containing characthers to replace;
        //isRandomIndex --> choose whether to shuffle the characters to be replaced;
    const processArray = async (arrayOne, arrayTwo, isRandomIndex) => {
        for (const letter of arrayOne) {
            //index of current letter
            const index = arrayOne.indexOf(letter);
            //Change the characters at proper index
            if (isRandomIndex) {
                const randomIndex = Math.floor(Math.random() * arrayTwo.length);
                arrayOne[index] = arrayTwo[randomIndex];
            } else {
                arrayOne[index] = arrayTwo[index];
            }
            //display the mnew string
            console.log('new string: ' + arrayOne)
            textGenerator.innerHTML = arrayOne.join('');
            //set delay between iterations
            await delay(delaySpeed);
        }
    }
    //repeat the animation x amount of times
    const repeatAnimation = async () => {
        for (let i = 0; i < 2; i++) {
            processArray(cryptedArray, symbols, true);
            await delay(cryptedArray.length * delaySpeed); //wait the end of current animation to repeat
        }
        //display proper letters
        processArray(cryptedArray, stringArray, false);
    }
    repeatAnimation();
}

button.addEventListener('click', handleClick);

