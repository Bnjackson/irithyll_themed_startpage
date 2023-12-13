import { updateTime, updateDate, updateMessage} from './resources/components/time.js';
import { SEARCH_INPUT, googleSearch } from './resources/components/search-bar.js';
import { displayLinks } from './resources/components/sidebar.js';

async function initialCalls() {
    updateDate();
    updateMessage();
    updateTime();
    displayLinks();
}

setInterval(updateTime, 1000);
setInterval(updateMessage, 60000);
setInterval(updateDate, 60000);

SEARCH_INPUT.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.target.value !== undefined) {
        googleSearch(event.target.value);
    }
});

initialCalls();