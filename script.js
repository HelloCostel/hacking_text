const textGenerator = document.querySelector('.text-generator');
const textInput = document.querySelector('.text-input');
const button = document.querySelector('.button');

const symbols = ['!', '"', '£', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

const handleClick = () => {
    const text = textInput.value;
    textGenerator.innerHTML = text;
};

button.addEventListener('click', handleClick);