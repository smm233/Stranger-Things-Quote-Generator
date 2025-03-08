const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://strangerthingsquotes.shadowdev.xyz/api/quotes";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getQuote(api_url);