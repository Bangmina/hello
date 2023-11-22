import React from "react";
import { TitleTemplate, Footer } from "../../components";
import { Introduce, Ci } from "./";
//
function WorkStory() {
	return (
		<div className="container__template">
			{/* <div className="container__bg--line--box">
				{new Array(5).fill().map((_, index) => (
					<span className="container__line" key={index}></span>
				))}
			</div> */}
			<section className="section__template">
				<TitleTemplate firstTitle="W" title="orkStory" />
				<Introduce />
				<Ci />
			</section>
			<Footer />
		</div>
	);
}

//
export default WorkStory;
