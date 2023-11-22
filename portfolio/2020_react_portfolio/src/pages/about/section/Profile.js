import React from "react";
import { ArticleTemplate } from "../../../components";
import "./profile.scss";
//
function Profile() {
	const profileTitle = ["이름", "연락처", "이메일", "URL"];
	const profileContent = [
		"방미나",
		"010-9165-4231",
		"mina94_02@naver.com",
		"https://github.com/Bangmina",
	];
	return (
		<ArticleTemplate title="프로필">
			<div className="profile__info--wrap">
				<div className="profile__info--title--box">
					{profileTitle.map((item, index) => (
						<div className="profile__info--title" key={index}>
							{item}
						</div>
					))}
				</div>
				<div className="profile__info--content--box">
					{profileContent.map((item, index) => (
						<div className="profile__info--content" key={index}>
							{item}
						</div>
					))}
				</div>
			</div>
		</ArticleTemplate>
	);
}

//
export default Profile;
