import React from "react";
import SiteHeader from "./siteheader/index.js";
import HomeHero from "./homehero/index.js";
import StarGoods from "./stargoods/index.js";
import HomeMain from "./homemain/index.js";
export default class Index extends React.Component{
	render(){
		var container ={width:1226,
		margin:"0 auto"}
		return(
			<div className="container">
				<SiteHeader />
				<HomeHero />
				<StarGoods />
				<HomeMain />
			</div>
		)
	}

}