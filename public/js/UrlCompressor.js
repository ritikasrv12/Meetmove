async function shortenUrl(event) {
    event.preventDefault();
    const urlInput = document.querySelector('input[name="url"]');
    const url = urlInput.value.trim();
    if (!url) return;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    if (data.ok) {
        const shortUrl = data.result.short_link;
        // Display the shortened URL to the user
    } else {
        // Display an error message to the user
    }
}
