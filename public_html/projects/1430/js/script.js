const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail."
];

const people =[
    "-Nelson Mandela",
    "-Walt Disney",
    "-Steve Jobs",
    "-Eleanor Roosevelt",
    "-Oprah Winfrey",
    "-James Cameron",
    "-John Lennon",
    "-Mother Teresa",
    "-Franklin D. Roosevelt",
    "-Margaret Mead",
    "-Robert Louis Stevenson",
    "-Eleanor Roosevelt",
    "-Benjamin Franklin",
    "-Helen Keller",
    "-Aristotle",
    "-Anne Frank",
    "-Ralph Waldo Emerson"
];

let audio = document.getElementsByTagName("audio")[0];

function getQuote() {
    
    audio.currentTime = 0;

    let num = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("quote").innerHTML = "\"" + quotes[num] + "\"";
    document.getElementById("person").innerHTML = people[num];

    audio.play();

}