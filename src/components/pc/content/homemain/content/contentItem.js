import React from "react";
import {Carousel,Icon} from "antd";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import "../../../../../style/homemain/contentItem.css";
import "../../../../../style/homemain/video.css";
export default class ContentItem extends React.Component{
	constructor(){
		super();
		this.state = {
			bgColor:"white",
			color:""
		}
	}
	render(){
		var nameStyle={
			color:"#333",
			fontSize:20,
			fontWeight:400,
			textAlign:"center"
		}
		var descStyle={
			width:200,
			height:40,
			color:"#b0b0b0",
			fontSize:12,
			textAlign:"center"
		}
		var priceStyle={
			color:"#333",
			fontSize:14
		}
		var bgColor =this.state.bgColor;
		var color=this.state.color;
		var titleColor = this.props.data.color;
		var content = this.props.data.content.map((item,index)=>{
			return(
				this.props.data.content.length-index == 1?<div key={index} className="swiper-slide flex" style={{width:296,height:340}}>
				    	<p style={{
				    		width:200,
				    		height:40
				    	}}>{item.name}</p>
				    	<a style={{
				    		display:"block",
				    		width:120,
				    		height:30,
				    		color:color,
				    		border:"1px solid",
				    		borderColor:color,
				    		backgroundColor:bgColor,
				    		textAlign:"center",
				    		fontSize:12,
				    		paddingTop:5,
				    		boxSizing:"border-box"
				    	}} 
				    	onMouseOver={this.change.bind(this)}
				    	onMouseLeave={this.leave.bind(this)}>{item.desc}</a>
				    	<img style={{
				    		margin:"30px 40px 0 40px"
				    	}} src={item.imgSrc}/>
				    </div>:<div key={index} className="swiper-slide flex" style={{width:296,height:340}}>
				    	<p style={nameStyle}>{item.name}</p>
				    	<p style={descStyle}>{item.desc}</p>
				    	<p style={priceStyle}>{item.price}</p>
				    	<img src={item.imgSrc} />
				    </div>
			)
		})
		return(
			<div style={{paddingTop:45,borderTop:"1px solid",borderColor:titleColor}} className="videoItem" >
				<div>
				  	<h2 style={{
				  		color:titleColor,
				  		textAlign:"center",
				  		fontSize:16,
				  		fontWeight:400,
				  		margin:"0 10px 18px"
				  }}>{this.props.data.title}</h2>
				 </div>
				<div className="swiper-container" style={{width:296}}>
				  <div className="swiper-wrapper">
				    {content}
				  </div>
				  	<div className="swiper-pagination"></div>
				 	<div className="swiper-button-prev swiper-navigation"><Icon type="left" /></div>
				  	<div className="swiper-button-next swiper-navigation"><Icon type="right" /></div>
				</div>
				 
			</div>
		)
	}
	 componentDidMount(){
	 	this.setState({
	 		color:this.props.data.color
	 	})
	 	var mySwiper = new Swiper('.swiper-container', {
			autoplay: false,//可选选项，自动滑动
			pagination: {
			    el: '.swiper-pagination',
			    clickable :true,
			},
			navigation: {
			    nextEl: '.swiper-button-next',
			    prevEl: '.swiper-button-prev',
			},
			allowTouchMove:false
		})
	 }
	 change(){
	 	this.setState({
	 		color:"white",
	 		bgColor:this.props.data.color
	 	})
	 }
	 leave(){
	 	this.setState({
	 		color:this.props.data.color,
	 		bgColor:"white"
	 	})
	 }
}