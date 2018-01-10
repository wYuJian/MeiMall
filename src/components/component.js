import React from "react";
import ReactDOM from "react-dom";

import MediaQuery from "react-responsive";

import PC from "./pc/router.js";
import Mobile from "./mobile/index.js";
class App extends React.Component{
	render(){ 
		return(
			<div id="mall">
				<MediaQuery query="(min-device-width:980px)">
					<PC />
				</MediaQuery>
				<MediaQuery query="(max-device-width:980px)">
					<Mobile />
				</MediaQuery>
			</div>
		)
	}

}
ReactDOM.render(<App />,document.getElementById('app'))