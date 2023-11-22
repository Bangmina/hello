import React from "react";
import { ArticleTemplate } from "../../../components";
import "./introduce.scss";

function Introduce() {
	return (
		<ArticleTemplate className="introduce__box">
			<div className="introduce__box--content">
				안녕하세요. 웹 퍼블리셔 방미나입니다 :)
				<br />
				유지보수에 최적화된 마크업에 관심이 많기에
				<br />
				리액트를 사용하여 컴포넌트 단위의 포트폴리오를 만들었습니다.
				<br />
				SCSS문법과 BEM방법론을 적극 활용해 탄탄하게 코드를 작성했습니다. <br />
				rem 단위의 스타일링을 통해 모바일 환경에 맞춘 유연한 UI를 개발했습니다.
				<br /> 협업을 위한 버전관리시스템으로 git을 다루는법을 익혔습니다.
				<br />
				반응형으로 어떤 디바이스에서 접속하더라도 사용하는데 어려움이 없도록
				했습니다.
			</div>
		</ArticleTemplate>
	);
}

export default Introduce;
