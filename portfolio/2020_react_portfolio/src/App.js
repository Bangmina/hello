import React from "react";
import { Main, SideMenu } from "./components";
import Pages from "./route";
//
function App() {
	return (
		<div className="App">
			<Main>
				<Pages />
			</Main>
			<SideMenu />
		</div>
	);
}
//
export default App;
