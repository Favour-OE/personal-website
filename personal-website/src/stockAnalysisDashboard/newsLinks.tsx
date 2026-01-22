import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "./stockAnalysisDashboard";

interface NewsLink {
	title: string;
	link: string;
}

interface NewsListProps {
	newsLinks: NewsLink[];
}

const NewsListContainer = styled.div`
	width: 100%;
`;

const NewsItem = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	margin-bottom: 8px;
`;

const NewsLink = styled.a`
	text-decoration: none;
	color: ${PrimaryColor};
	font-size: 10px;
	cursor: pointer;
`;

const ScrollableList = styled.div`
	max-height: 90px;
	overflow-y: auto;
`;

const NewsList: React.FC<NewsListProps> = ({ newsLinks }) => {
	return (
		<NewsListContainer>
			<div style={{ marginBottom: "8px" }}>In The News</div>
			<ScrollableList>
				{newsLinks.map((news, index) => (
					<NewsItem key={index}>
						<NewsLink
							href={news.link}
							title={news.title}
							target="_blank"
							rel="noopener noreferrer"
						>
							{news.title}
						</NewsLink>
					</NewsItem>
				))}
			</ScrollableList>
		</NewsListContainer>
	);
};

export default NewsList;
