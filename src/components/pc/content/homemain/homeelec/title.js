import React from "react";
import "../../../../../style/homemain/title.css";
export default class Title extends React.Component{
	constructor(){
		super();
		this.state  = {
			index:0
		}
	}
	render(){
		return(
			<div>
				<div className="bx-hd">
					<h2>{this.props.data.title}</h2>
					<div>
						<ul className="tab-list">
							{
								this.props.data.tab.map((item,index)=>{
									var borderBottom = this.state.index == index ?"2px solid #ff6700":"2px solid white";
									return(
										<li style={{borderBottom:borderBottom,cursor:"pointer"}} key={index} onMouseOver={this.over.bind(this,index)}>{item}</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
	over(index){
		this.setState({
			index:index
		})
		this.props.change(index);
	}
}