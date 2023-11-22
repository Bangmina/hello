import React from 'react';
import { AboutDateTemplate, ArticleTemplate } from '../../../components'
import './career.scss';
//
function Career() {
    return (
        <ArticleTemplate title="경력">
            <AboutDateTemplate
                title="뉴링크 웹 퍼블리셔"
                date="2018년 10월 ~ 2020년 2월"
            >
                <div className="profile__info--date--content">
                    암호화폐 거래소 유지보수 및 페이앱 프로젝트에 참여했습니다.
                </div>
            </AboutDateTemplate>
            <AboutDateTemplate
                title="제이엔터프라이즈 웹 디자이너"
                date="2016년9월 ~ 2018년5월"
            >
                <div className="profile__info--date--content">
                    핸드메이드 오픈마켓 쇼핑몰에서 웹디자이너로 디자인 및 사이트 유지보수에 참여했습니다.
                </div>
            </AboutDateTemplate>
        </ArticleTemplate>
    );
}

//
export default Career;
