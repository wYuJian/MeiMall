import React from "react";
import "../../../../src/style/detail/detail.css";
import Header from "../header/index.js";
import Footer from "../footer/index.js";
import DetailLeft from "./detailLeft.js";
import DetailRight from "./detailRight.js";
import detailData from "../../../data/detail.json";
import {Row,Col} from "antd"; 
import SiteHeader from "../content/siteheader/index.js";
export default class DetailIndex extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[]
		}
	}
	render(){
		return(
			<div>
				<Header />
				<div className="container">
					<SiteHeader />
					<Row>
						<Col span={9}>
							<DetailLeft data={this.state.data} />
						</Col>
						<Col span={11}>
							<DetailRight data={this.state.data} />
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		)
	}
	componentDidMount(){
		var data =[];
		detailData.map((item,index)=>{
			if(item.id == this.props.match.params.id){
				data.push(item);
				this.setState({
					data:data
				})
			}
		})
		
	}
}