import React from "react";
import { ArticleTemplate } from "../../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./graph.scss";
//
function Graph() {
	const skillGraphList = [
		{ id: 1, percentage: 85, technique: "HTML5 / CSS3" },
		{ id: 2, percentage: 65, technique: "Javascript" },
		{ id: 3, percentage: 60, technique: "React" },
		{ id: 4, percentage: 80, technique: "OpenSource" },
		{ id: 5, percentage: 80, technique: "PhotoShop" },
	];
	return (
		<ArticleTemplate className="graph__box">
			<ul className="graph__list">
				{skillGraphList.map((item) => (
					<li className="graph__item" key={item.id}>
						<CircularProgressbar
							value={item.percentage}
							text={`${item.percentage}%`}
						/>
						<div className="graph__item--title">{item.technique}</div>
					</li>
				))}
			</ul>
		</ArticleTemplate>
	);
}

//
export default Graph;
