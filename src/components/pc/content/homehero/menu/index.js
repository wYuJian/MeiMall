import React from "react";
import "../../../../../style/homehero/menu.css";
import menuData from "../../../../../data/mimenu.json";
import {Link } from "react-router-dom";
import {Spin,Icon} from "antd";
export default class Menu extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0,
			isShow:false
		}
	}
	render(){
		var menu = menuData.length?<ul style={{backgroundColor:"rgba(0,0,0,0.6)",
		paddingTop:20,
		paddingBottom:20}}>{menuData.map((item,index)=>{
			var defaultActiveKey = "/list/"+(index+1);
			return(
				<li className="menu-item" key={index} onMouseOver={this.over.bind(this,index)}>
					<Link style={{
						color:"white"
					}} to={defaultActiveKey}>{item.title}<Icon type="right" /></Link>
				</li>
			)
		})}</ul>:<Spin size="large" tip="Loading..." />;
		var isW = parseInt(menuData[this.state.index].items.length/6)*250;
		var w = isW<900?isW+250:isW;
		var menuRight = this.state.isShow?(menuData[this.state.index].items.length?<ul style={{
			display:"flex",
			flexDirection:"column",
			flexWrap:"wrap",
			height:462,
			width:w
		}}>{
			menuData[this.state.index].items.map((item,index)=>{
				
				return(
					<li key={index} className="menu-right-item">
						<img style={{width:40,
							height:40,
							marginRight:"12px"}} src={item.imgSrc} />
						<p style={{margin:0}}>{item.name}</p>
					</li>
				)
			})
		}</ul>:<Spin size="large" tip="Loading..." />):"";
		return(
			<div className="menu">
				<div className="site-category" onMouseLeave={this.leave.bind(this)}>
					{menu}
					<div className="menu-right">
						{menuRight}
					</div>
				</div>
			</div>
		)
	}
	leave(){
		this.setState({
			isShow:false
		})
	}
	over(index){
		this.setState({
			index:index,
			isShow:true
		})
	}
}