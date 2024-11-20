const facts = [
    "The sky appears blue during the day because of Rayleigh scattering.",
    "Sunsets and sunrises are colorful due to the scattering of light.",
    "On a clear night, you can see thousands of stars with the naked eye.",
    "Clouds form when moist air rises and cools, causing condensation.",
    "Auroras are natural light displays caused by solar wind interactions."
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('factDisplay').textContent = randomFact;
});
