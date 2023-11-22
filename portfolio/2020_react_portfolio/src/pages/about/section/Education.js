import React from 'react';
import { AboutDateTemplate, ArticleTemplate } from '../../../components'
import './education.scss';
//
function Education() {
    return (
        <ArticleTemplate title="학력">
            <AboutDateTemplate
                title="강원대학교 방송영상학과"
                date="2012년 3월 ~ 2016년 2월"
            />
            <AboutDateTemplate
                title="삼척여자고등학교"
                date="2009년 3월 ~ 2012년 2월"
            />
            <AboutDateTemplate
                title="삼척여자중학교"
                date="2006년 3월 ~ 2019년 2월"
            />
        </ArticleTemplate>
    );
}

//
export default Education;
