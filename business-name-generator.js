const adjectives = ["Quick", "Happy", "Smart", "Bright", "Creative"];
const shopTypes = ["Bakery", "Cafe", "Boutique", "Studio", "Market"];
const otherWords = ["Corner", "Place", "Spot", "Haven", "World"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("generateButton").addEventListener("click", function() {
    const adjective = getRandomElement(adjectives);
    const shopType = getRandomElement(shopTypes);
    const otherWord = getRandomElement(otherWords);
    
    const businessName = `${adjective} ${shopType} ${otherWord}`;
    document.getElementById("businessName").innerText = businessName;
});
