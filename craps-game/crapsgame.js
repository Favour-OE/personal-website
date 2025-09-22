//Craps Main Data
let crapsUsername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRound = 0;

//HTML Elements ID
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username";
const crapsStatsMoney = "craps-stats-money";
const crapsStatsRounds = "craps-stats-rounds";

//in-game variables

let currentMoney = startingMoney;
let currentRounds = startingRound;

function registerCrapsPlayer() {
	crapsUsername = document.getElementById("craps-username-input").value;

	// Username validation check
	let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g;
	if (crapsUsername.length < 5 || firstCharIsDigitRegex.test(crapsUsername)) {
		alert(
			"Username must be at least 5 characters long, alphanumberic and underscore only, no spaces and cannot start with a number."
		);
	} else {
		removeRegistrationPane();
		showMainGameSection();
		setupFirstRound();
	}
}

function removeRegistrationPane() {
	document.getElementById(crapsRegistrationPane).style.display = "none";
}
function showMainGameSection() {
	document.getElementById(crapsMainSection).style.display = "block";
}

function setupFirstRound() {
	document.getElementById(crapsStatsUsername).innerHTML = crapsUsername;
	currentMoney = startingMoney;
	currentRounds = startingRound;
	setMoney(startingMoney);
	setRounds(currentRounds);
}

function setMoney(money) {
	document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRounds(rounds) {
	document.getElementById(crapsStatsRounds).innerHTML = rounds;
}
