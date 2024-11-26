// Array of ASCII art
const asciiArt = [
  `
										   .


												   *
						.
			  *                              --O--
											  /|\\
				 ,                     .
										   .
..-.--*--.__-__..._.--..-._.---....~__..._.--..~._.---.--..____.--_--'`_---..
	   -.--~--._  __..._.--..~._.--- - -.____.--_--'`_---..~.----_~

									.--..~._
				  -.-
								 .-.        .
  `,
  `
	.  .      .
	 \\____/
	/      \\
   |        |
   \\______ /
  `,
];

// Function to display random ASCII art
function displayRandomAsciiArt() {
  const randomIndex = Math.floor(Math.random() * asciiArt.length);
  const asciiArtContainer = document.getElementById('ascii-art');
  asciiArtContainer.textContent = asciiArt[randomIndex].trim(); // Remove leading/trailing whitespace
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', displayRandomAsciiArt);
