document.getElementById("savePdfBtn").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
        fetch("http://localhost:3001/convert-to-pdf", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: currentUrl })
        })
            .then(response => response.json())
            .then(data => alert("PDF saved at: " + data.pdfPath))
            .catch(error => alert("Err: " + error.message));
    });
});

document.getElementById("saveMarkdownBtn").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentUrl = tabs[0].url;
        fetch("http://localhost:3001/convert-to-markdown", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: currentUrl })
        })
            .then(response => response.json())
            .then(data => alert("Markdown saved at: " + data.markdownPath))
            .catch(error => alert("Error: " + error.message));
    });
});
