let buttons = document.querySelectorAll(".btn");
let screentext = document.getElementById("screentext");
let clear = document.getElementById("clr");
let del = document.getElementById("del");
let eq = document.getElementById("eq");

function checkOperator(string) {
    if (string == "+" || string == "-" || string == "*" || string == "/" || string == "%") {
        return true;
    }
    return false;
}

function countPeriods(string) {
    let count = 0;
    if (string) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ".") count++;
        }
    }
    return count;
}

function updateScreen(item) {
    console.log(item);
    if (item == 0 && screentext.innerHTML == 0) screentext.innerHTML = item;
    else if (screentext.innerHTML == "Infinity") screentext.innerHTML = 0;
    else if (screentext.innerHTML == "NaN") screentext.innerHTML = 0;
    else if (screentext.innerHTML == "undefined") screentext.innerHTML = 0;
    else if (screentext.innerHTML == "null") screentext.innerHTML = 0;
    else if (checkOperator(screentext.innerHTML) && checkOperator(item)) return;
    else if (checkOperator(item) && !checkOperator(screentext.innerHTML)) screentext.innerHTML += ` ${item} `;
    else if (item != 0 && screentext.innerHTML == 0) screentext.innerHTML = item; 
    else if (item != 0 && screentext.innerHTML != 0) screentext.innerHTML += item;
}

function compute(operation) {
    if (operation == 0) return 0;
    operation = operation.split(" ");
    if (countPeriods(operation[0]) > 1 || countPeriods(operation[2]) > 1) return "too many decimals";
    let first = operation[0];
    let second = operation[2];
    let operator = operation[1];
    let result = 0;

    switch (operator) {
        case "+":
            result = parseFloat(first) + parseFloat(second);
            return Math.round(result * 100) / 100;
        case "-":
            result = parseFloat(first) - parseFloat(second);
            return Math.round(result * 100) / 100;
        case "*":
            result = parseFloat(first) * parseFloat(second);
            return Math.round(result * 100) / 100;
        case "/":
            if (second == 0) return "can't let you do that dave";
            result = parseFloat(first) / parseFloat(second);
            return Math.round(result * 100) / 100;
        case "%":
            result = parseFloat(first) % parseFloat(second);
            return Math.round(result * 100) / 100;
    }
}

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", () => updateScreen(button.textContent));
});

clear.addEventListener("click", () => (screentext.innerHTML = 0));
del.addEventListener("click", () => {
    let currentValue = screentext.innerHTML;
    screentext.innerHTML = currentValue.slice(0, -1);
});

del.addEventListener("click", () => {
    if (screentext.innerHTML == 0) screentext.innerHTML = 0;
});

eq.addEventListener("click", () => {
    screentext.innerHTML = compute(screentext.innerHTML);
});
