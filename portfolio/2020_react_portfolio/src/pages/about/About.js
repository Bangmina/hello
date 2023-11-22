import React from "react";
import { SectionTemplate, TitleTemplate, Footer } from "../../components";
import {
	Profile,
	Project,
	Career,
	Education,
	Technology,
	Skill,
	LeftOver,
} from "./";
import "./about.scss";
//
function About() {
	return (
		<div className="container__template">
			{/* <div className="container__bg--line--box">
				{new Array(5).fill().map((_, index) => (
					<span className="container__line" key={index}></span>
				))}
			</div> */}
			<section className="section__template">
				<TitleTemplate
					firstTitle="A"
					title="bout Me"
					subTitle="Nice To Meet You"
				/>
				<Profile />
				<Project />
				<Career />
				<Education />
				<Technology />
				<Skill />
				<LeftOver />
			</section>
			<Footer />
		</div>
	);
}

//
export default About;
