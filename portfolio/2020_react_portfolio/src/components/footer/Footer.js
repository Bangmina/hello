import React from "react";
import "./footer.scss";

//
function Footer() {
	return (
		<footer className="footer">
			<div className="footer__title">
				✔ 함께 나누고 싶은 이야기가 있으시다면
			</div>
			<div className="footer__contact">suu5868@gmail.com</div>
			<p className="footer__subtitle">
				어떤 내용이여도 좋아요! 언제든 연락주세요 😊
			</p>
			<ul className="footer__list">
				<li className="footer__item footer__nav--gitgub">
					<a href="https://github.com/bangmina" target="_blank">
						GitHub
					</a>
					&nbsp; / &nbsp;
					<a href="https://mnbang.tistory.com/" target="_blank">
						Blog
					</a>
				</li>
				<li className="footer__item footer__nav--copyright">
					© 2020 minaportfolio
				</li>
				<li className="footer__item footer__nav--made">
					Made by mina with <span className="footer__heart">💛</span>
				</li>
			</ul>
		</footer>
	);
}
//
export default Footer;
