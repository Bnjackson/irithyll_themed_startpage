async function readJsonFile() {
    try {
        const response = await fetch('./links.json');
        const jsonData = await response.json();
        return jsonData;
    } catch (err) {
        console.error('Error reading JSON file:', err.message);
    }
}

async function displayLinks() {
    const linksContainer = document.querySelector('#linksContainer');
    const linksData = await readJsonFile();
    for (let i = 0; i < linksData.length; i++) {
        let link = document.createElement('li');
        let anchor = document.createElement('a');
        link.textContent = linksData[i]['id'];
        anchor.setAttribute('href', linksData[i]['link']);
        anchor.appendChild(link);
        link.classList.add("link");
        linksContainer.appendChild(anchor);
    }
}

export { displayLinks };