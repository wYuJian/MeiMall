import React from "react";
import Header from "../header/index.js";
import Footer from "../footer/index.js";
import {Link} from "react-router-dom";
import { Collapse,Icon } from 'antd';
const Panel = Collapse.Panel;
import SiteHeader from "../content/siteheader/index.js";
import ListItem from "./item.js";
import "../../../style/list/list.css";
import listData from "../../../data/mimenu.json";
export default class List extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<div className="container">
					<SiteHeader />
					<div>
						<Link className="listTitle" to="/">首页</Link>
						<span> > </span>
						<Link className="listTitle" to="/list/1">所有分类</Link>
					</div>
					<div>
						<Collapse defaultActiveKey={this.props.match.params.defaultActiveKey}>
						    {
						    	listData.map((item,index)=>{
						    		return(
						    			<Panel style={{
						    				fontSize:18
						    			}} key={index+1} header={item.title}>
						    				<ListItem data={item.items} />
						    			</Panel>
						    		)
						    	})
						    }
						</Collapse>
					</div>
				</div>
				<Footer />  
			</div>
		)
	}

}