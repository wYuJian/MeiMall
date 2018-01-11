import React from "react";
import {Spin} from "antd";
//商品详情左边模块
export default class DetailLeft extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0,
			display:"none",
			left:0,
			top:0,
			zIndex:-1
		}
	}
	render(){
		console.log(this.props.data);
		var wh = 300;
		var left = this.state.left-wh/2;
		left = (this.state.left-wh/2<0)?0:left;
		left = (this.state.left>=(450-wh/2))?(450-wh):left;
		var top = this.state.top-wh/2;
		top = (this.state.top-wh/2<0)?0:top;
		top = (this.state.top>=(450-wh/2))?(450-wh):top;
		var content = this.props.data.length ? <div style={{
				position:"relative"
			}}>
				<div style={{
					marginTop:10,
					border:"1px solid #eeeeee",
				}}>
					<div style={{
						width:450,
						height:450,
						position:"absolute",
						top:0,
						left:0,
						zIndex:1,
						cursor:"move"
					}}
					 onMouseMove={this.move.bind(this)}
					 onMouseLeave={this.leave.bind(this)}></div>
					<img src={this.props.data[0].content.big_imgs[this.state.index]} />
					<div style={{
						width:wh,
						height:wh,
						backgroundColor:"rgba(255,165,0,0.5)",
						position:"absolute",
						top:top,
						left:left,
						display:this.state.display
					}}></div>
				</div>
				<ul style={{
						display: "flex",
						flexDirection:"row",
						justifyContent:"space-around",
						alignItems:"center",
						paddingTop:5,
						marginTop:20
					}}><li><img src="https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-prev.png" /></li>{
					this.props.data[0].content.sm_imgs.map((item,index)=>{
						var border = this.state.index == index ?"2px solid #ff6700":"2px solid white";
						return(
							<li key={index} style={{
								padding:2,
								border:border
							}} onMouseOver={this.change.bind(this,index)}>
								<img src={item} />
							</li>
						)
					})

				}<li><img src="https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-next.png" /></li></ul>
				<div style={{
					position:"absolute",
					left:460,
					top:0,
					width:542,
					height:542,
					overflow:"hidden",
					zIndex:this.state.zIndex
				}}>
					<img src={this.props.data[0].content.mBig_imgs[this.state.index]} style={{
						position:"relative",
						display:this.state.display,
						left:-1.4*left,
						top:-1.4*top
					}}/>
				</div>
			</div>:<Spin tip="Loading..."></Spin>
		return(
			<div>
				{content}
			</div>
		)
	}
	change(index){
		this.setState({
			index:index
		})
	}
	move(e){
		// console.log(e.nativeEvent)
		this.setState({
			display:"block",
			zIndex:10,
			top:e.nativeEvent.offsetY,
			left:e.nativeEvent.offsetX
		})
	}
	leave(){
		this.setState({
			display:"none",
			zIndex:-1
		})
	}
}