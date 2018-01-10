import React from "react";
import "../../../../../style/homemain/video.css";
export default class LeftADS extends React.Component{
	render(){
		var ads ={
			display:"flex",
			flexDirection:"column",
			flexWrap:"wrap",
			width:"300px"
		}
		var w = this.props.ads.length?w=234:0;
		return(
			<div style={{width:w}}>{
				this.props.ads.map((item,index)=>{
					return(
						<img className="videoItem" key={index} style={{width:w,			
							marginBottom:"10px"}} src={item}/>
					)
				})
			}</div>
		)
	}

}