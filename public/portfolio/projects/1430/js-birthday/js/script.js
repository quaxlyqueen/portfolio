var userName = prompt("What is your name?");
var userAge = prompt("What is your age?");

if(userAge < 50) {

    alert("Welcome, " + userName +"! You're " + userAge + ". You're so young!");

} else {

    alert("Welcome, " + userName +"! You're " + userAge + ".\n\nWhat was it like when dinosaurs roamed the Earth?");

}
window.onload = function() {

    document.getElementById('personalizedGreetings').innerHTML = "Happy " + userAge + " birthday, " + userName + "!"

}
