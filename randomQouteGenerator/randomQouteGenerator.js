const randomQouteGenerator = document.getElementById("random-qoute-generator");
const newQuoteButton = document.getElementById("new-random-qoute");
const colors = [
	["#4A4E69", "#22223B"],
	["#355C7D", "#1C3144"],
	["#2F4858", "#0F2027"],
	["#3A506B", "#1C2541"],
	["#5B8A72", "#2F5D50"],
	["#6D597A", "#46344E"],
	["#475C7A", "#2E4057"],
	["#4C5B5C", "#1B262C"],
	["#5C5470", "#2C2A3E"],
	["#586F7C", "#2F3E46"],
];

function getRandomColorCombo() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}
function getNewRandomQoute() {
	fetch("http://api.quotable.io/random")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network Response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			const colorCombo = getRandomColorCombo();
			const angle = Math.floor(Math.random() * (180 - 45 + 1)) + 45;
			randomQouteGenerator.style.background =
				"linear-gradient(" +
				angle +
				"deg," +
				colorCombo[0] +
				"," +
				colorCombo[1] +
				")";
			// randomQouteGenerator.style.background =
			// 	"linear-gradient(45deg,#586F7C, #2F3E46)";

			//button hover to adapt to color schema
			newQuoteButton.addEventListener("mouseover", () => {
				// newQuoteButton.style.background = colorCombo[1];
				newQuoteButton.style.color = colorCombo[0];
				newQuoteButton.style.border = "none";
			});
			newQuoteButton.addEventListener("mouseout", () => {
				newQuoteButton.style.background = "";
				newQuoteButton.style.color = "";
				newQuoteButton.style.border = "";
			});
			const qouteText = data.content;
			const qouteAuthor = data.author;
			document.getElementById("random-qoute-text").innerHTML = qouteText;
			document.getElementById("random-qoute-author").innerHTML =
				qouteAuthor;
		})
		.catch((error) => {
			console.error(
				"There was a problem with the fetch operation: ",
				error
			);
		});
}
