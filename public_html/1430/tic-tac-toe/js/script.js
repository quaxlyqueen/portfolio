const playerX = prompt("Please enter player one's name:");
const playerO = prompt("Please enter player two's name:");

const boxes = document.getElementsByClassName("box");

let currentPlayer = playerX;

const posX = [];
let indexX = 0;

const posO = [];
let indexO = 0;

let marks = 0;

document.getElementById("output-text").innerHTML = currentPlayer + "\'s turn."
document.getElementById("clear").hidden = true;

function clickTracker(button) {

    if(button.innerHTML === "") {

        mark(button.id);

    }

}

function mark(index) {

    let winstate = false;

    marks++;

    if(currentPlayer === playerX) {

        boxes[index].innerHTML = "X" 

        posX[indexX] = index;
        indexX++;

        if(marks > 4) {

            winstate = checkForWin(posX);

        }

        if(winstate === 1) {

            document.getElementById("output-text").innerHTML = currentPlayer + " WON!"
            document.getElementById("clear").hidden = false;

        } else if(winstate === 2) {

            document.getElementById("output-text").innerHTML = "It's a tic-tac-tie!";
            document.getElementById("clear").hidden = false;

        } else {

            currentPlayer = playerO;
            document.getElementById("output-text").innerHTML = currentPlayer + "'s turn."

        }

    } else {

        boxes[index].innerHTML = "O"

        posO[indexO] = index;
        indexO++;

        if(marks > 4) {

            winstate = checkForWin(posO);

        }

        if(winstate === 1) {

            document.getElementById("output-text").innerHTML = currentPlayer + " WON!"
            document.getElementById("clear").hidden = false;

        } else if(winstate === 2) {

            document.getElementById("output-text").innerHTML = "It's a tic-tac-tie!";
            document.getElementById("clear").hidden = false;

        } else {

            currentPlayer = playerX;
            document.getElementById("output-text").innerHTML = currentPlayer + "'s turn."

        }

    }


}

function checkForWin(player) {

    const winstates = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];

    let count = 0;

    for(let j = 0; j < winstates.length; j++) {

        for(let k = 0; k < player.length; k++) {

            for(let i = 0; i < winstates[j].length; i++) {

                if(player[k] == winstates[j][i]) {

                    count++;

                }

            }

        }

        if(count === 3) {

            for (let i = 0; i < winstates[j].length; i++) {

                boxes[winstates[j][i]].style.backgroundColor = "#4A245E";
                boxes[winstates[j][i]].style.color = "white";

            }

            return 1;

        } else if(marks === 9) {

            return 2;

        } else {

            count = 0;

        }

    }

    return -1;

}

function resetAndClear() {

    for(let i = 0; i < boxes.length; i++) {

        boxes[i].innerHTML = ""
        boxes[i].style.backgroundColor = "white";
        boxes[i].style.color = "#4A245E";

    }

    if(currentPlayer === playerX) {

        currentPlayer = playerO;

    } else {

        currentPlayer = playerX;

    }

    for(let i = 0; i < posX.length; i++) {

        posX[i] = -1;

    }

    for(let i = 0; i < posO.length; i++) {

        posO[i] = -1;

    }

    marks = 0;

    document.getElementById("output-text").innerHTML = currentPlayer + "\'s turn"
    document.getElementById("clear").hidden = true;

}
