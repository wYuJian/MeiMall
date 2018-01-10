import React from "react";
import pageData from "../../../../data/pagemain.json";
import leftAds from "../../../../data/leftads.json";
import HomeEelec from "./homeelec/index.js";
import ReviewIndex from "./review/index.js";
import Content from "./content/index.js";
import VideoIndex from "./video/index.js";
export default class HomeMain extends React.Component{
	render(){
		// console.log(pageData[0][0].titleData)
		return(
			<div>
				{
					pageData.map((item,index)=>{
						return(
							<HomeEelec key={index} ads={leftAds[index].leftAds} 
							itemsData={pageData[index][1].gooData} 
							title={pageData[index][0].titleData} />
						)
					})
				}
				<ReviewIndex />
				<Content />
				<VideoIndex />
			</div>
		)
	}

}