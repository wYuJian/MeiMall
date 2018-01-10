import React from "react";
import Title from "../homeelec/title.js";
import VideoItem from "./videoItem.js";
import {Icon} from 'antd';
import "../../../../../style/homemain/video.css";
import videoData from "../../../../../data/video.json";
export default class VideoIndex extends React.Component{
	constructor(){
		super();
		this.state = {
			moreColor:"#424242",
			iColor:"#b0b0b0"
		}
	}
	render(){
		return(
			<div>
				<div style={{
					display:"flex",
					flexDirection:"row",
					justifyContent:"space-between",
					alignItems:"center"
				}}>
					<Title data={{"title":"视频","tab":[]}} />
					<div onMouseOver={this.over.bind(this)} onMouseLeave={this.leave.bind(this)} style={{
						fontSize:16,
						cursor:"pointer",
						color:this.state.moreColor
					}}>查看更多<Icon type="right-circle" style={{
						width:20,
						height:20,
						color:this.state.iColor
					}}/></div>
				</div>
				<div style={{
					display:"flex",
					flexDirection:"row",
					justifyContent:"space-around",
					alignItems:"center"
				}}>{
					videoData.map((item,index)=>{
						return(
							<VideoItem key={index} data={item} />
						)
					})
				}</div>
			</div>
		)
	}
	leave(){
		this.setState({
			moreColor:"#424242",
			iColor:"#b0b0b0"
		})
	}
	over(){
		this.setState({
			moreColor:"#f87300",
			iColor:"#f87300"
		})
	}
}