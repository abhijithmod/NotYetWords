// Array of playful responses to spark imagination!
const phrases = [
    "Sock Heaven", "Wonderland of Lost Things", "Umbrellaland",
    "The Scribble Sea", "Dream Drift", "Crunchscape", "Leafsnapia",
    "The Realm of Forgotten Thoughts", "Museworld", "Pen-Guise",
    "Cloud Drift", "The Sock Dimension", "Founderia", "Oopsxiety"
];

// Generate a random phrase from the list
function generatePhrase() {
    const promptInput = document.getElementById('prompt').value.trim();
    const responseDiv = document.getElementById('response');

    if (promptInput) {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        responseDiv.textContent = randomPhrase;
        responseDiv.style.color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    } else {
        responseDiv.textContent = "Please enter an idea!";
        responseDiv.style.color = '#555';
    }
}
