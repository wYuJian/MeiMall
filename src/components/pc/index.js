import React from "react";
import "antd/dist/antd.css";
import Header from "./header/index.js";
import Footer from "./footer/index.js";
import Content from "./content/index.js";
export default class PCIndex extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Content />
				<Footer />
			</div>
		)
	}

}