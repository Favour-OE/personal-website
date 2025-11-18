function DashboardGrid({ stockData }:{stockData: unknown}) {
	return (
		<div>
			Dashboard Grid Component
			{JSON.stringify(stockData)}
		</div>
	);
}

export default DashboardGrid;
