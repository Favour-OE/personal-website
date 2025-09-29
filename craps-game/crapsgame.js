//Craps Main Data
let crapsUsername = "";

//Craps Game Settings
const startingMoney = 1000;
const startingRound = 0;
const bets = {
	even: "EVEN",
	odd: "ODD",
};
const minimumBet = 100;

//HTML Elements ID
const crapsUsernameInput = "craps-username-input";
const crapsRegistrationPane = "craps-registration-pane";
const crapsMainSection = "craps-main-section";
const crapsStatsUsername = "craps-stats-username";
const crapsStatsMoney = "craps-stats-money";
const crapsStatsRounds = "craps-stats-rounds";
const crapsUserBetAmount = "craps-user-bet-amount";
const crapsRollDiceButton = "craps-roll-dice-button";
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container";

//in-game variables

let currentMoney = startingMoney;
let currentRounds = startingRound;
let currentBet = bets.even;
let currentBetAmount = minimumBet;
let canChangeBet = true;

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

	setMoney(startingMoney);
	setRounds(startingRound);
	betEven();
	setBetAmount(minimumBet);
}

function setMoney(money) {
	currentMoney = money;
	document.getElementById(crapsStatsMoney).innerHTML = money;
}

function setRounds(rounds) {
	currentRounds = rounds;
	document.getElementById(crapsStatsRounds).innerHTML = rounds;
}
function betEven() {
	chooseBet(bets.even);
}

function betOdd() {
	chooseBet(bets.odd);
}
function chooseBet(bet) {
	if (canChangeBet) {
		currentBet = bet;
		document.getElementById(bet).style.backgroundColor =
			"var(--titleSectionPrimaryColor)";
		const deselectBet = bet == bets.even ? bets.odd : bets.even;
		document.getElementById(deselectBet).style.backgroundColor =
			"transparent";
	}
}
function increaseBet() {
	setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney));
}

function decreaseBet() {
	setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet));
}

function setBetAmount(betAmount) {
	if (canChangeBet) {
		currentBetAmount = betAmount;
		document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount;
	}
}

function rollDice() {
	canChangeBet = false;
	formatDiceScale();
	document.getElementById(crapsRollDiceButton).style.display = "none";
	const diceRollElement = document.getElementById(
		crapsRollDiceAnimationContainer
	);
	rollADie({
		element: diceRollElement,
		numberOfDice: 2,
		callback: delayedProcessDiceResult,
		delay: 10000000,
	});
}

window.addEventListener("resize", formatDiceScale);
function formatDiceScale() {
	const vw = window.innerWidth * 0.8;
	const vh = window.innerHeight * 0.8;
	const widthScale = Math.min(700, vh, vw);
	const heightScale = widthScale * 0.714;
	const scale = heightScale / 494.6592;
	document.getElementById(crapsRollDiceAnimationContainer).style.transform =
		"scale(" + scale + ")";
}

function delayedProcessDiceResult (diceResult){
	setTimeout(function() {processDiceResult(diceResult); }, 1000)
}
function processDiceResult(diceResult) {
	const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0);
	let diceSumResult = bets.even;
	if (sum % 2 === 1) {
		diceSumResult = bets.odd;
	}
	//ROUNDS incremental
	setRounds(currentRounds + 1);

	//Money Update
	if (diceSumResult === currentBet) {
		setMoney(currentMoney + currentBetAmount);
	} else {
		setMoney(currentMoney - currentBetAmount);
	}
}
