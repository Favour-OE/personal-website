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
async function getNewRandomQoute() {
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

	// button hover to adapt to color schema
	newQuoteButton.addEventListener("mouseover", () => {
		newQuoteButton.style.color = colorCombo[0];
	});
	newQuoteButton.addEventListener("mouseout", () => {
		newQuoteButton.style.color = "";
	});
	const response = await fetch("https://api.quotable.io/random");
	if (!response.ok) {
		alert("There was a problem getting a new qoute!");
	}
	const data = await response.json();

	const qouteText = data.content;
	const qouteAuthor = data.author;
	document.getElementById("random-qoute-text").innerHTML = qouteText;
	document.getElementById("random-qoute-author").innerHTML = qouteAuthor;
}
