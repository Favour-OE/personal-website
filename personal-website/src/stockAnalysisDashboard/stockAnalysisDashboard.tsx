import { useState } from "react";
import { analyzeStock } from "./stockAnalysisDashboard";

function StockAnalysisDashboard() {
	const [stockData, setStockData] = useState<string>("");
	const [stockSymbol, setStockSymbol] = useState<string>("");

	async function runStockAnalysis() {
		const gotStockData = await analyzeStock(stockSymbol);
		setStockData(gotStockData);
	}

	return (
		<>
			<div>
				<div id="stock-analysis-dashboard-title">
					STOCK ANALYSIS DASHBOARD
				</div>
				<div id="stock-analysis-dashboard-subtitle">
					Put in a stock Symbol you'd like to analyze (eg. MSFT)
				</div>
				<input
					type="text"
					placeholder="Enter stock symbol"
					value={stockSymbol}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setStockSymbol(e.target.value)
					}
				/>

				<button
					className="stock-analysis-dashboard-button"
					onClick={() => runStockAnalysis()}
				>
					Analyze
				</button>
				<div>{JSON.stringify(stockData)}</div>
			</div>
		</>
	);
}

export default StockAnalysisDashboard;
