import React from "react";
import Title from "./title.js";
import LeftADS from "./leftads.js";
import RightItem from "./rightitem.js";
export default class HomeEelec extends React.Component{
	render(){
		return(
			<div>
				<Title data={this.props.title}/>
				<div style={{
					display: "flex",
					flexDirection:"row",
					justifyContent:"space-around"
					}}>
					<LeftADS ads={this.props.ads}/>
					<RightItem itemsData ={this.props.itemsData} />
				</div>
			</div>
		)
	}

}