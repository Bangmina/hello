import React from 'react';
import { AboutDateTemplate, ArticleTemplate } from '../../../components'
import './project.scss';
//
function Project() {
    return (
        <ArticleTemplate title="프로젝트">
            <AboutDateTemplate
                title="캡페이 결제 프로젝트 구축 총 2건 ( 관리자 웹, 하이브리드 앱 )"
                date="2019년 02월 ~ 2019년 06월"
            >
                <div className="profile__info--date--content">
                    앱 하이브리드34P , 관리자웹 32P 구축 ( 퍼블리싱 100% 담당) <br/>
                    SVN JIRA 사용
                </div>
            </AboutDateTemplate>
            <AboutDateTemplate
                title="캐셔레스트 모바일 리뉴얼"
                date="2018년 10월 ~ 2018년 12월"
            >
                <div className="profile__info--date--content">
                    모바일 웹 구축 및 유지보수 ( 41P 퍼블리싱 100% 담당) <br/>
                    SVN JIRA 사용
                </div>
            </AboutDateTemplate>
        </ArticleTemplate>
    );
}

//
export default Project;
