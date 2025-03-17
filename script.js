const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://strangerthingsquotes.shadowdev.xyz/api/quotes";
let bgm = new Audio("strangerthings_bgm.mp3");
bgm.loop = true;

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
    bgm.play();
}

getQuote(api_url);