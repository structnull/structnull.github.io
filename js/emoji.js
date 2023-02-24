// Define an array of emojis
const emojis = ["😈", "👻", "🤖","🐒",  "🦄",  "🦕",  "🐙",  "🐌",  "🦞",  "🐳",  "🦔",  "🦌",  "🦥",  "🐸",  "🦩",  "🦈",  "🦧",  "🦜",  "🐉",  "🦖",  "🐡",  "🦇",  "🦑",  "🦨",  "🐋",  "🦦",  "🦮",  "🦢"];

// Check if all emojis have been displayed
if (localStorage.getItem("loadedEmojis")) {
  const loadedEmojis = JSON.parse(localStorage.getItem("loadedEmojis"));
  if (loadedEmojis.length === emojis.length) {
    localStorage.removeItem("loadedEmojis"); // Remove loadedEmojis from local storage
  }
} 

// Function to select a random emoji from the array that hasn't been displayed yet
function selectRandomEmoji() {
  let loadedEmojis = JSON.parse(localStorage.getItem("loadedEmojis")) || [];

  // Get an array of unused emojis
  const unusedEmojis = emojis.filter(function(emoji) {
    return !loadedEmojis.includes(emoji);
  });

  // If all emojis have been displayed, reset the loadedEmojis array
  if (unusedEmojis.length === 0) {
    loadedEmojis = [];
  }

  // Choose a random emoji from the unusedEmojis array
  const randomEmoji = unusedEmojis[Math.floor(Math.random() * unusedEmojis.length)];

  // Add the randomEmoji to the loadedEmojis array
  loadedEmojis.push(randomEmoji);

  // Store the updated loadedEmojis array in localStorage
  localStorage.setItem("loadedEmojis", JSON.stringify(loadedEmojis));

  // Return the randomEmoji
  return randomEmoji;
}

// Select the emoji element and set its inner HTML to a random emoji
const emojiElement = document.querySelector(".emoji");
emojiElement.innerHTML = selectRandomEmoji();
