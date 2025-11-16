export async function analyzeStock(stockSymbolToAnalyze: string) {

	if (!stockSymbolToAnalyze) {
		alert("You must put in a ticker symbol before analysis");
		return;
	}
	const url = "http://127.0.0.1:5000/analyze-stock/" + stockSymbolToAnalyze;

	const response = await fetch(url);
	if (!response.ok) {
		alert("There was a problem getting the analysis for your stock!");
	}

	const data = await response.json();
	return data;
}
