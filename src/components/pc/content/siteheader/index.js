import React from "react";
import {Link} from 'react-router-dom';
import "../../../../style/siteheader/siteheader.css"
import {Input} from 'antd';
var Search = Input.Search;
var headerNav =[{"title":"小米手机","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"红米","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"笔记本","phone":[{"name":"小米MIX22","price":"3299","new":"","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"电视","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"盒子","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"新品","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"路由器","phone":[{"name":"小米MIX22","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"智能硬件","phone":[{"name":"小米MIX22","price":"3299","new":"","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"},{"name":"小米MIX2","price":"3299","new":"新品","imgSrc":"https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png"}]},
				{"title":"服务","phone":[]},
				{"title":"社区","phone":[]}];
export default class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			index:0,
			isShow:false
		}
	}
	render(){
		var JnavCategory={
			width:142,
			height:88
		}
		var hederNav={
			display:"flex",
			flexDirection:"row",
			justifyContent:"space-around",
			alignItems:"center"
		}
		var itemChildren=this.state.isShow?<ul className="children-list-items">{headerNav[this.state.index].phone.map((item,index)=>{
			var isNew=item.new !=""?{border:"1px solid #ff6700",marginBottom:"14px"}:{border:"1px solid #fff",marginBottom:"14px"};
			return(
				<li key={index} className="children-list-item">
					<span className="isnew" style={isNew}>{item.new}</span>
					<img style={{width:160,height:110}}src={item.imgSrc} />
					<p className="item-name">{item.name}</p>
					<p className="item-price">{item.price}起</p>
				</li>
			) 
		})}</ul>:"";
		return(
			<div style={hederNav}>
				<div style={{backgroundColor:"#ff6700",
						width:55,
						height:55}}>
					<Link to="/">
						<img style={{width:55,
								height:55}} src="https://s01.mifile.cn/i/mi-logo.png"/>
					</Link>
				</div>
				<div style={JnavCategory}></div>
				<div className="header-nav" onMouseLeave={this.leave.bind(this)}>
					<ul style={{
						display:"flex",
						flexDirection:"row",
						justifyContent:"space-around",
						alignItems:"center",
						paddingTop:12,
						boxSizing:"border-box",
						marginBottom:0
					}}>{
						headerNav.map((item,index)=>{
							return(
								<li className='headerItem' key={index}  onMouseOver={this.showList.bind(this,index)}>{item.title}</li>
							)
						})
					}</ul>
					<div className="children-list">{itemChildren}</div>
				</div>
				<div style={{position:"relative"}} className="search-hot-words">
					<Search></Search>
					<a style={{position:"absolute",top:15,left:105,zIndex:4,color:"#757575",backgroundColor:"#eeeeee"}}>红米5 新品</a>
					<a style={{position:"absolute",top:15,left:190,zIndex:4,color:"#757575",backgroundColor:"#eeeeee"}}>小米Note 3</a>
				</div>
			</div>
		)
	}
	leave(){
		this.setState({
			isShow:false
		})
	}
	showList(index){
		this.setState({
			index:index,
			isShow:true
		})
		
	}
}