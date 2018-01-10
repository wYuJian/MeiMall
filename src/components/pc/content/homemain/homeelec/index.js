import React from "react";
import Title from "./title.js";
import LeftADS from "./leftads.js";
import RightItem from "./rightitem.js";
export default class HomeEelec extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0
		}
	}
	render(){
		return(
			<div>
				<Title data={this.props.title} change={this.change.bind(this)}/>
				<div style={{
					display: "flex",
					flexDirection:"row",
					justifyContent:"space-around"
					}}>
					<LeftADS ads={this.props.ads}/>
					<RightItem itemsData ={this.props.itemsData} itemIndex = {this.state.index}/>
				</div>
			</div>
		)
	}
	change(index){
		this.setState({
			index:index
		})
	}
}