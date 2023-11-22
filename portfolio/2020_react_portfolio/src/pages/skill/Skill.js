import React from "react";
import { TitleTemplate, Footer } from "../../components";
import { Graph } from "./";
import "react-circular-progressbar/dist/styles.css";
import "./skill.scss";
//
function Skill() {
	return (
		<div className="container__template">
			{/* <div className="container__bg--line--box">
				{new Array(5).fill().map((_, index) => (
					<span className="container__line" key={index}></span>
				))}
			</div> */}
			<section className="section__template">
				<TitleTemplate
					firstTitle="S"
					title="kill"
					subTitle="Sass, React, Git, Zeplin 등 생산성과 협업을 위한 지식을 배우고 적용하며 공부합니다."
				/>
				<Graph></Graph>
			</section>
			<Footer />
		</div>
	);
}

//
export default Skill;
