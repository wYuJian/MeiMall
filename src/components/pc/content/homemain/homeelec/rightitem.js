import React from "react";
import "../../../../../style/homemain/video.css";
export default class RightItem extends React.Component{
	render(){
		var LiStyle = {
			paddingTop:20,
			width:232,
			height:300,
			marginBottom:30,
			marginLeft:5,
			marginRight:5,
			float:"left"
		};
		var itemUl ={
			display:"flex",
			flexDirection:"row",
			flexWrap:"wrap"
		}
		// console.log(this.props.itemIndex)
		var content = <ul className="itemUl">{
					this.props.itemsData[this.props.itemIndex].map((item, index)=>{
						return (
							<li key={index} className="itemLi" style={LiStyle} className="videoItem">
								<div style={{textAlign:"center"}} >
									<img style={{width:150,height:150}} src={item.imgSrc} />
									<p>{item.title}{this.props.itemIndex} </p>
									<p style={{
										color:"#b0b0b0",
										fontSize:12
									}}>{item.desc}</p>
									<p style={{color:"#ff6700"}}>{item.price}元<del className="" style={{marginLeft:8,color:"#b0b0b0"}}>{item.del}元</del></p>
								</div>
							</li>
						);
					})
				}
				</ul>
		return(<div>
			{content}
			</div>)
	}

}