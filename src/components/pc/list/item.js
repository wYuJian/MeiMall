import React from "react";
export default class ListItem extends React.Component{
	render(){
		return(
			<div>
				<ul className="list-items">{
					this.props.data.map((it,i)=>{
						var borderT = "1px solid #e0e0e0";
						var borderL = ((i+1)%5)==0?"1px solid white":"1px solid #e0e0e0"
						return(
							<li key={i} className="list-item" style={{
								borderTop:borderT,
								borderRight:borderL
							}}>
								<a style={{
									margin:"0 auto 24px"
								}}>
									<img src={it.imgSrc} />
								</a>
								<p className="list-good-name">{it.name}</p>
							</li>
						)
					})
				}</ul>
			</div>
		)
	}

}