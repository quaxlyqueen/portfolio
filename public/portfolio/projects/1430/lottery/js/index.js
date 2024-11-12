
//function userPrompt() {

let size = prompt("Please enter the lottery size you\'d like:");

console.log(size);

function clickRegistered() {

    console.log("Click registered, printing to console.");

}

//}


/*
const playButton = document.querySelector("#playbutton")

function userPrompt() {

    let size = prompt("Please enter the lottery size you\'d like:");

    if((size == null) || (size < 1) || (size < 10)) {

        userPrompt();

    } else {

        createArray(size);

    }

}

function createArray(size) {
    
    const lotteryPool = [];

    for(let i = 0; i < size; i ++) {
    
        lotteryPool[i] = Math.floor(Math.random() * 100);

    }
    
    displayOutput(lotteryPool);

}

function displayOutput(lotteryPool) {

    let result = "";

    for(let i = 0; i < lotteryPool.length; i++) {

        if(i < lotteryPool.length - 1) {

            result += lotteryPool[i] + "-";

        } else {

            result += lotteryPool[i];

        }

    }

    document.getElementById("output").innerHtml = result;

}
*/
