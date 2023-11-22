import React from 'react';
import './titleTemplate.scss';
//
function TitleTemplate(props) {
    return (
        <article className="common__title--box">
            <h2 className="common__title"><span className="color-orange">{props.firstTitle}</span>{props.title}</h2>
            <p className="common__subtitle">{props.subTitle}</p>
        </article>
    )
}
//
export default TitleTemplate;
