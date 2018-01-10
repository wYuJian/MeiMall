import React from "react";
import {Icon} from "antd";
export default class VideoItem extends React.Component{
	render(){
		return(
			<div style={{position:"relative"}} className="videoItem">
				<Icon type="play-circle-o" className="videoIcon"/>
				<img src={this.props.data.imgSrc} style={{
					marginBottom:30
				}}/>
				<p className="videoName" style={{
					textAlign:"center",
					color:"#333"
				}}>{this.props.data.name}</p>
				<p style={{
					textAlign:"center",
					color:"#b0b0b0"
				}}>{this.props.data.desc}</p>
			</div>
		)
	}

}