import React from "react";
import Banner from "./carousel/index.js";
import Menu from "./menu/index.js";
import Sub from "./sub/index.js";
export default class HomeHero extends React.Component{
	render(){
		return(
			<div style={{position:"relative"}}>
				<Banner />
				<Menu />
				<Sub />
			</div>
		)
	}

}