import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
// window.$ = window.jQuery = jQuery;
import "./sideMenu.scss";
//
function sideMenu() {
	//
	function sideMenuOn() {
		$(".aside__wrap").css("left", "0");
	}
	//
	function sideMenuOff() {
		$(".aside__wrap").css("left", "-100vw");
	}
	//
	$(document).keydown(function (event) {
		if (event.keyCode === 27 || event.which === 27) {
			sideMenuOff();
		}
	});
	//
	const navList = [
		{
			key: "1",
			path: "./about",
			content: "N. about",
		},
		{
			key: "2",
			path: "./skill",
			content: "N. skill",
		},
		{
			key: "3",
			path: "./workstory",
			content: "N. workStory",
		},
	];
	//
	const callContent = [
		{
			key: "1",
			title: "",
		},
	];
	return (
		<aside className="aside">
			<div className="hover--bg"></div>
			<div className="aside__wrap--left">
				<h1 className="aside__logo--box">
					<Link to="/">
						<img className="aside__logo" src="./images/logo.png" alt="로고" />
					</Link>
				</h1>
				<div className="aside__menu--box">
					<div className="aside__menu hover-color" onClick={sideMenuOn}>
						<span className="menu-line top"></span>
						<span className="menu-line center"></span>
						<span className="menu-line bottom"></span>
						<div className="menu-text">
							M<br />
							E<br />
							N<br />
							U<br />
						</div>
					</div>
				</div>
			</div>
			<div className="aside__wrap">
				<div className="aside__close--content" onClick={sideMenuOff}>
					<div className="aside__close--circle">
						{/* <div className="aside__close--text">CLOSE</div> */}
					</div>
				</div>
				<div className="aside__nav--content">
					<ul className="aside__nav--index">
						{navList.map((item, index) => (
							<li key={item.key}>
								<Link to={item.path} onClick={sideMenuOff}>
									{item.content}
								</Link>
							</li>
						))}
					</ul>
					<ul className="aside__nav--info">
						<li className="aside__map--box">
							<div className="aside__map">
								<iframe
									width="150%"
									height="150%"
									src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%EB%8F%99%EC%9E%91%EA%B5%AC%20%EC%83%81%EB%8F%84%EB%A1%9C+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
									scrolling="no">
									<a href="https://www.maps.ie/draw-radius-circle-map/">
										Radius map tool
									</a>
								</iframe>
							</div>
							<a
								href="https://www.google.com/maps/@37.483782,126.9003409,14z"
								target="_blank"
								className="aside__map--button">
								View Larger Map
							</a>
						</li>
						<li>
							<ul className="aside__call--wrap">
								<li className="aside__call--box">
									<p className="aside__call--title">ADDRESS</p>
									<p className="aside__call--content">
										서울시 동작구 상도동
										<br />
										Sangdo-dong, Dongjak-gu, Seoul
									</p>
								</li>
								<li className="aside__call--box">
									<p className="aside__call--title">CONTACT</p>
									<p className="aside__call--content">
										010-9165-4231
										<br />
										mina94_02@naver.com
									</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
}
//
export default sideMenu;
