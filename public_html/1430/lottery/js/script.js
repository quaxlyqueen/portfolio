const size = prompt("Please enter the size of the lottery pool:");

const lotteryValues = [];

window.onLoad = start();

function start() {

    createArray();

}

function refresh() {

    createArray();

}

function createArray() {

    for(let i = 0; i < size; i++) {

        lotteryValues[i] = getRandomInt();

    }

    generateOutput();

}

function generateOutput() {

    let output = "";

    for(let i = 0; i < lotteryValues.length; i++) {

        output += lotteryValues[i];

        if(i < lotteryValues.length - 1) {

            output += "-";

        }

    }

    document.getElementById("output").innerHTML = output 

}

function getRandomInt() {

    let min = 1;
    let max = 100;

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);

}
