function generateName() {
    const inputText = document.getElementById('nameInput').value; // Get the input value
    const outputText = document.getElementById('outputText'); // Get the output div

    if (inputText.trim() === '') {
        outputText.textContent = 'Please enter a name.'; // Message for empty input
        return;
    }

    const randomSuffixes = [' Jr.', ' II', ' III', ' IV', ' the Great']; // Example suffixes
    const randomIndex = Math.floor(Math.random() * randomSuffixes.length); // Random index for suffix

    // Generate a random name
    const randomName = `${inputText}${randomSuffixes[randomIndex]}`;
    outputText.textContent = randomName; // Display the generated name
}
