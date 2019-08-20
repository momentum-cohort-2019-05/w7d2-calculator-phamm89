function q (nodeOrSelector, selector) {
    let node
    if (selector) {
        node = nodeOrSelector
    } else {
        node = document
        selector = nodeOrSelector
    }

    return node.querySelector(selector)
}

function qAll (nodeOrSelector, selector) {
    let node
    if (selector) {
        node = nodeOrSelector
    } else {
        node = document
        selector = nodeOrSelector
    }

    return node.querySelectorAll(selector)
}

const output = q("#calculator-screen");

// Display the buttons clicked on the calculator screen
const buttons = qAll(['.calculator-button-item']);

for (let button of buttons) {
    button.addEventListener('click', function() {
        output.innerText += button.innerText;
    })
};


const enterButton = q("#calculator-enter");

enterButton.addEventListener('click', function() {
    output.innerText = math.evaluate(output.innerText);
});


const clearButton = q("#calculator-clear");

clearButton.addEventListener('click', function() {
    output.innerText = '';
});