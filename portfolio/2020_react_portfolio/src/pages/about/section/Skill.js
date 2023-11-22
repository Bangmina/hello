import React from 'react';
import { ArticleTemplate } from '../../../components';
import './skill.scss';
//
function Skill() {
    return (
        <ArticleTemplate
            title="경력 기술서"
        >
            <p className="profile__subtitle">
                웹 표준에 맞춰 의미 있는 구조를 가지며, 다양한 환경에 반응하도록 디자인과 UX를 구현하고, 모두가 접근 가능한 웹사이트를 만들기 위해 노력하고 있습니다.
            </p>
        </ArticleTemplate>
    );
}
//
export default Skill;
