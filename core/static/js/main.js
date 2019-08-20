const output = document.querySelector("#calculator-screen");

// Display the buttons clicked on the calculator screen
const buttons = document.querySelectorAll(['.calculator-button-item']);

for (let button of buttons) {
    button.addEventListener('click', function() {
        output.innerText += button.innerText;
    })
};


const enterButton = document.querySelector("#calculator-enter");

enterButton.addEventListener('click', function() {
    output.innerText = math.evaluate(output.innerText);
});


const clearButton = document.querySelector("#calculator-clear");

clearButton.addEventListener('click', function() {
    output.innerText = '';
});
