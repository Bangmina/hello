import React from 'react';
import './titleTemplate.scss';
//
function AboutDateTemplate(props) {
    return (
        <div className="profile__info--date--wrap">
            <div className="profile__info--date--box">
                <div className="profile__info--date--title">
                    {props.title}<span className="date">{props.date}</span>
                </div>
                {props.children}
            </div>
        </div>
    )
}
//
export default AboutDateTemplate;
