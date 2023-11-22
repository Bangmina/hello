import React from 'react';
import './technology.scss';
//
function Technology() {
    return (
        <article className="article__template">
            <h3 className="profile__title">전문 기술</h3>
            <p className="profile__subtitle">전문 분야와 기술, 개발할 때 사용하는 도구입니다.</p>
            <ul className="profile__info--list--wrap">
                <li className="profile__info--list--box">HTML5 / CSS3</li>
                <li className="profile__info--list--box">Javascript, jQuery</li>
                <li className="profile__info--list--box">웹 표준</li>
                <li className="profile__info--list--box">반응형 웹</li>
                <li className="profile__info--list--box">오픈소스 활용</li>
                <li className="profile__info--list--box">SVN</li>
            </ul>
        </article>
    );
}

//
export default Technology;
