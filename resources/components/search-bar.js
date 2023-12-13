const SEARCH_INPUT = document.querySelector('#searchInput');

function googleSearch(searchInput) {
    if (searchInput.trim() !== '') {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchInput)}`;
        window.location.href = googleSearchUrl;
    }

}

export {SEARCH_INPUT, googleSearch};