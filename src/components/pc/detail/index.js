import React from "react";
import "../../../../src/style/detail/detail.css";
import Header from "../header/index.js";
import Footer from "../footer/index.js";
import DetailLeft from "./detailLeft.js";
import DetailRight from "./detailRight.js";
import detailData from "../../../data/detail.json";
import {Row,Col} from "antd"; 
export default class DetailIndex extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[]
		}
	}
	render(){
		console.log(this.state.data)
		return(
			<div>
				<Header />
				<div className="container">
					<Row>
						<Col span={9}>
							<DetailLeft />
						</Col>
						<Col span={11}>
							<DetailRight />
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		)
	}
	componentDidMount(){
		// var data =[]
		// detailData.map((item,index)=>{
		// 	data = item.id == this.props.match.params.id ? item :[]
		// 	if(data.length>0){
		// 		this.setState({
		// 			data:data
		// 		})
		// 	}
		// })
	}
}