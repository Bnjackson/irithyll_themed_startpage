const SEARCH_INPUT = document.querySelector('#searchInput');

function googleSearch(searchInput) {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
    console.log(googleSearchUrl);
    window.location.href = googleSearchUrl;
}

export {SEARCH_INPUT, googleSearch};