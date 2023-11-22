import React from "react";
import Typed from "react-typed";
import "./home.scss";
//
function Home() {
	return (
		<div className="home">
			<div className="home__title--wrap">
				<div className="home__title--sub">
					<Typed
						strings={["Enjoy", "Positive", "Untiring", "Interesting"]}
						typeSpeed={40}
						backSpeed={50}
						loop>
						<input type="text" />
					</Typed>
				</div>
				<h2 className="home__title--logo">
					<img className="home__logo--img" src="./images/logo.png" alt="로고" />
				</h2>
			</div>
		</div>
	);
}
//
export default Home;
