import React from "react";
import HotItem from "./item.js";
import hotGooData from "../../../../../data/hotgood.json";
export default class ReviewIndex extends React.Component{
	render(){
		return(
			<div>
				<h2 style={{fontSize: "22px",
					fontWeight: 500,
					color: "#333"}}>热评产品</h2>
					<div style={{
						display:"flex",
						flexDirection:"row",
						justifyContent:"space-around",
						alignItems:"center"
					}}>{
						hotGooData.map((item,index)=>{
							return(
								<HotItem key={index} data={item} />
							)
						})
					}</div>
			</div>
		)
	}

}