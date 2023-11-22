import React from "react";
import { ArticleTemplate } from "../../../components";
import "./ci.scss";

function Ci() {
	return (
		<ArticleTemplate className="ci__box">
			<div className="ci__logo--box">
				<img
					src="../../../images/w-logo.png"
					alt="로고"
					className="ci__logo--img"
				/>
				<ul className="ci__content--wrap">
					<li className="ci__content--logo1">
						<ul className="ci__logo1-box">
							<li className="ci__logo1--img">
								<img src="./images/logo.png" alt="로고" />
							</li>
							<li className="ci__logo1--point">
								<ul className="ci__point--list">
									<li>SIMPLE</li>
									<li>NAME [ M I N A ]</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="ci__content--logo2">
						<ul className="ci__logo2-box">
							<li>
								<img src="../../../images/work-logo01.png" alt="로고" />
							</li>
							<li>
								<img src="../../../images/work-logo02.png" alt="로고" />
							</li>
							<li>
								<img src="../../../images/work-logo03.png" alt="로고" />
							</li>
							<li>
								<img src="../../../images/work-logo04.png" alt="로고" />
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className="ci__font--box">
				<img
					src="../../../images/w-font.png"
					alt="폰트"
					className="ci__font--img"
				/>
				<ul className="ci__content--wrap">
					<li className="ci__content--font">
						<div className="ci__font--wrap">
							<div className="ci__font">KR</div>
							<div className="ci__font--txt">Noto Sans</div>
						</div>
					</li>
					<li className="ci__content--font">
						<div className="ci__font--wrap">
							<div className="ci__font">EN</div>
							<div className="ci__font--txt">ROBOTO</div>
						</div>
					</li>
				</ul>
			</div>
		</ArticleTemplate>
	);
}

export default Ci;
