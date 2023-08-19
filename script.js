function sketchSquaresRainbow() {
    let squares = document.querySelectorAll("div.square");
    let colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];

    squares.forEach(function (i) {
        i.addEventListener("mouseover", function () {
            let randColor = colors[Math.floor(Math.random() * colors.length)];
            i.style.backgroundColor = `${randColor}`;
        });
    });
}

function sketchSquares() {
    let squares = document.querySelectorAll("div.square");

    squares.forEach(function (i) {
        i.addEventListener("mouseover", function () {
            i.style.backgroundColor = "black";
        });
    });
}

let squaresButton = document.getElementById("usersquares");
squaresButton.addEventListener("click", function () {
    promptForSquares();
});

let rainbowbutton = document.getElementById("rainbowbutton");
rainbowbutton.addEventListener("click", function () {
    promptForSquaresRainbow();
});

function newSquares(amount) {
    let grid = document.getElementById("grid");

    //clear grid
    grid.innerHTML = "";

    let newGridWidth = amount * 42;
    newGridWidth += "px";
    grid.style.width = `${newGridWidth}`;

    for (let index = 0; index < amount * amount; index++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        grid.append(square);
    }
    sketchSquares();
}

function newSquaresRainbow(amount) {
    let grid = document.getElementById("grid");

    //clear grid
    grid.innerHTML = "";

    let newGridWidth = amount * 42;
    newGridWidth += "px";
    grid.style.width = `${newGridWidth}`;

    for (let index = 0; index < amount * amount; index++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        grid.append(square);
    }
    sketchSquaresRainbow();
}

function promptForSquares() {
    let userSquares = prompt("How many squares per side do you want?");

    if (userSquares != null && userSquares <= 20 && userSquares >= 1) {
        newSquares(userSquares);
    } else alert("Please enter a value between 1 and 100");
}

function promptForSquaresRainbow() {
    let userSquares = prompt("How many squares per side do you want?");

    if (userSquares != null && userSquares <= 20 && userSquares >= 1) {
        newSquaresRainbow(userSquares);
    } else alert("Please enter a value between 1 and 20");
}


sketchSquares();