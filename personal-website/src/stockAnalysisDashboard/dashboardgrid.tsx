/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { DashboardGridContent } from "./stockAnalysisDashboard";

function DashboardGrid({ stockData }: { stockData: any }) {
	useEffect(() => {
		GridStack.init();
	});
	return (
		<div>
			<div className="grid-stack">
				{/* First Row */}
				<div className="grid-stack-item" gs-w="3">
					<DashboardGridContent className="grid-stack-item-content">
						<div>{stockData.basicInfo.marketCap}</div>
						<div>MARKET CAP </div>
					</DashboardGridContent>
				</div>
				<div className="grid-stack-item" gs-w="3">
					<DashboardGridContent className="grid-stack-item-content">
						<div>{stockData.basicInfo.fullTimeEmployees}</div>
						<div>EMPLOYEES</div>
					</DashboardGridContent>
				</div>
				<div className="grid-stack-item" gs-w="3">
					<DashboardGridContent className="grid-stack-item-content">
						<div>{stockData.basicInfo.totalRevenue}</div>
						<div>TOTAL REVENUE </div>
					</DashboardGridContent>
				</div>
				<div className="grid-stack-item" gs-w="3">
					<DashboardGridContent className="grid-stack-item-content">
						<div>{stockData.basicInfo.trailingEps}</div>
						<div>EARNINGS PER SHARE </div>
					</DashboardGridContent>
				</div>
			</div>
		</div>
	);
}

export default DashboardGrid;
