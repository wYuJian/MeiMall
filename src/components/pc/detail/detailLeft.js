import React from "react";
//商品详情左边模块
var data = {
	"big_imgs":[
	"https://img12.360buyimg.com/n1/s450x450_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg",
	"https://img12.360buyimg.com/n1/s450x450_jfs/t3016/166/2035221633/101965/de6008c2/57d11b6cNadd88152.jpg",
	"https://img12.360buyimg.com/n1/s450x450_jfs/t3019/64/2028867348/39722/cbaf6a6b/57d11b6cN41ad3870.jpg",
	"https://img12.360buyimg.com/n1/s450x450_jfs/t3187/126/1665384626/20577/95564d9f/57d11b6dN1abcee0f.jpg",
	"https://img12.360buyimg.com/n1/s450x450_jfs/t3211/49/1652956922/98083/99fd992d/57d11b6dNba0fea6b.jpg"	
	],
	"sm_imgs":[
	"https://img12.360buyimg.com/n5/s54x54_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg",
	"https://img12.360buyimg.com/n5/s54x54_jfs/t3016/166/2035221633/101965/de6008c2/57d11b6cNadd88152.jpg",
	"https://img12.360buyimg.com/n5/s54x54_jfs/t3019/64/2028867348/39722/cbaf6a6b/57d11b6cN41ad3870.jpg",
	"https://img12.360buyimg.com/n5/s54x54_jfs/t3187/126/1665384626/20577/95564d9f/57d11b6dN1abcee0f.jpg",
	"https://img12.360buyimg.com/n5/s54x54_jfs/t3211/49/1652956922/98083/99fd992d/57d11b6dNba0fea6b.jpg"
	],
	"mbig_imgs":[
	"https://img14.360buyimg.com/n0/jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg",
	"https://img14.360buyimg.com/n0/jfs/t3016/166/2035221633/101965/de6008c2/57d11b6cNadd88152.jpg",
	"https://img14.360buyimg.com/n0/jfs/t3019/64/2028867348/39722/cbaf6a6b/57d11b6cN41ad3870.jpg",
	"https://img14.360buyimg.com/n0/jfs/t3187/126/1665384626/20577/95564d9f/57d11b6dN1abcee0f.jpg",
	"https://img14.360buyimg.com/n0/jfs/t3223/185/1656650225/45118/27b7bd1d/57d11b6dN7b535984.jpg"
	],
	"prev":"https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-prev.png",
	"next":"https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-next.png"
}
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
		var wh = 300;
		var left = this.state.left-wh/2;
		left = (this.state.left-wh/2<0)?0:left;
		left = (this.state.left>=(450-wh/2))?(450-wh):left;
		var top = this.state.top-wh/2;
		top = (this.state.top-wh/2<0)?0:top;
		top = (this.state.top>=(450-wh/2))?(450-wh):top;
		return(
			<div style={{
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
					<img src={data.big_imgs[this.state.index]} />
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
						paddingTop:5
					}}><li><img src={data.prev} /></li>{
					data.sm_imgs.map((item,index)=>{
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

				}<li><img src={data.next} /></li></ul>
				<div style={{
					position:"absolute",
					left:460,
					top:0,
					width:542,
					height:542,
					overflow:"hidden",
					zIndex:this.state.zIndex
				}}>
					<img src={data.mbig_imgs[this.state.index]} style={{
						position:"relative",
						display:this.state.display,
						left:-1.4*left,
						top:-1.4*top
					}}/>
				</div>
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