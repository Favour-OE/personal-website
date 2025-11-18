import { useState } from "react";
import {
	analyzeStock,
	VerticalAlignContainer,
	VerticalAlignContent,
} from "./stockAnalysisDashboard";
import { Oval } from "react-loader-spinner";
import "./stockAnalysisDashboard.css";
import DashboardGrid from "./dashboardgrid";

function StockAnalysisDashboard() {
	const [stockData, setStockData] = useState<string>("");
	const [stockSymbol, setStockSymbol] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);
	const [gotData, setGotData] = useState(false);

	function goBack() {
		setGotData(false);
		setIsLoading(false);
	}

	async function runStockAnalysis() {
		setIsLoading(true);
		const gotStockData = await analyzeStock(stockSymbol);
		if (gotStockData) {
			setStockData(gotStockData);
			setGotData(true);
			setIsLoading(false);
		} else {
			goBack();
		}
	}

	if (gotData) {
		return (
			<VerticalAlignContainer>
				<VerticalAlignContent>
					<div onClick={() => goBack()}>BACK</div>

					<div>
						<DashboardGrid
							stockData = {stockData}
						></DashboardGrid>
						{/* {JSON.stringify(stockData)} */}
					</div>
				</VerticalAlignContent>
			</VerticalAlignContainer>
		);
	}

	return (
		<VerticalAlignContainer>
			<VerticalAlignContent>
				<div>
					<div id="stock-analysis-dashboard-title">
						STOCK ANALYSIS DASHBOARD
					</div>
					{isLoading ? (
						<div>
							<Oval
								height={40}
								width={40}
								color="#4fa94d"
								secondaryColor="#4fa94d"
								strokeWidth={5}
								strokeWidthSecondary={5}
								visible={true}
								ariaLabel="oval-loading"
							/>
						</div>
					) : (
						<div>
							<div id="stock-analysis-dashboard-subtitle">
								Put in a stock Symbol you'd like to analyze (eg.
								MSFT)
							</div>

							<input
								type="text"
								placeholder="Enter stock symbol"
								value={stockSymbol}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setStockSymbol(e.target.value)}
							/>

							<button
								className="stock-analysis-dashboard-button"
								onClick={() => runStockAnalysis()}
							>
								Analyze
							</button>
						</div>
					)}
				</div>
			</VerticalAlignContent>
		</VerticalAlignContainer>
	);
}

export default StockAnalysisDashboard;
