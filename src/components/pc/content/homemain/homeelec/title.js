import React from "react";
import "../../../../../style/homemain/title.css";
export default class Title extends React.Component{
	render(){
		return(
			<div>
				<div className="bx-hd">
					<h2>{this.props.data.title}</h2>
					<div>
						<ul className="tab-list">
							{
								this.props.data.tab.map((item,index)=>{
									return(
										<li key={index} onMouseOver={this.over.bind(this,index)}>{item}</li>
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
		console.log(index)
	}
}