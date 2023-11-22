import React from "react";
import "./articleTemplate.scss";
//
function ArticleTemplate(props) {
	return (
		<article className={`article__template ${props.className}`}>
			<h3 className="profile__title">{props.title}</h3>
			{props.children}
		</article>
	);
}
//
export default ArticleTemplate;
