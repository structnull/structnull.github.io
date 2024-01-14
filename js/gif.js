// Array of gif URLs
const gifs = 
    ["  https://media.giphy.com/media/a5viI92PAF89q/giphy.gif",
        "https://media.giphy.com/media/B4dt6rXq6nABilHTYM/giphy.gif",
        "https://media.giphy.com/media/3ov9jCGzR1JtD8Hlni/giphy.gif",
        "https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif",
        "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif",
        "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif",
        "https://media.giphy.com/media/orVa44Oav5WoF1LVOE/giphy.gif",
        "https://media.giphy.com/media/Lopx9eUi34rbq/giphy.gif",
        "https://media.giphy.com/media/olAik8MhYOB9K/giphy.gif",
        "https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif",
        "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
        "https://media.giphy.com/media/CqVNwrLt9KEDK/giphy.gif",
        "https://media.giphy.com/media/1dIo6kDOPMzsnMOJTj/giphy.gif"
    ];
// Get the gif element
const gif = document.getElementById("gif");
let lastIndex = localStorage.getItem("lastIndex");
if (lastIndex !== null) {
    lastIndex = Number(lastIndex);
    lastIndex = lastIndex === gifs.length - 1 ? 0 : lastIndex + 1;
} else {
    lastIndex = Math.floor(Math.random() * gifs.length);
}
gif.src = gifs[lastIndex];
localStorage.setItem("lastIndex", lastIndex);
