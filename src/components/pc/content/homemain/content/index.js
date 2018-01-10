import React from "react";
import Title from "../homeelec/title.js";
import ContentItem from "./contentItem.js";
import contentData from "../../../../../data/content.json";

export default class Content extends React.Component{
	render(){
		return(
			<div>
				<Title data={{"title":"内容","tab":[]}} />
				<div>
					<div style={{
					display:"flex",
					flexDirection:"row",
					justifyContent:"space-around",
					alignItems:"center"
				}}>{
						contentData.map((item,index)=>{
							return(
								<ContentItem key={index} data={item} />
							)
						})
					}</div>
				</div>
			</div>
		)
	}

}