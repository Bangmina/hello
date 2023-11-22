import React from 'react';
import './titleTemplate.scss';
//
function TitleTemplate(props) {
    return (
        <div className="profile__info--date--wrap">
            <div className="profile__info--date--box">
                <div className="profile__info--date--title">
                    캡페이 결제 프로젝트 구축 총 2건 ( 관리자 웹, 하이브리드 앱 )<span className="date">{props.date}</span>
                </div>
                <div className="profile__info--date--content">
                    앱 하이브리드34P , 관리자웹 32P 구축 ( 퍼블리싱 100% 담당) <br/>
                    SVN JIRA 사용
                </div>
            </div>
        </div>
    )
}
//
export default TitleTemplate;
