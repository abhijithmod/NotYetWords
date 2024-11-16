// Array of playful responses to spark imagination!
async function generatePhrase() {
    const promptInput = document.getElementById('prompt').value.trim();
    const responseDiv = document.getElementById('response');

    if (promptInput) {
        try {
            const response = await fetch("https://notyetwords.onrender.com/generate-phrase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ prompt: promptInput })
            });
            const data = await response.json();
            responseDiv.textContent = data.response;
            responseDiv.style.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
        } catch (error) {
            responseDiv.textContent = "Oops! Something went wrong. Please try again.";
            responseDiv.style.color = '#555';
        }
    } else {
        responseDiv.textContent = "Please enter an idea!";
        responseDiv.style.color = '#555';
    }
}

}
