import React from "react";

import "../../../style/header/header.css";
import {Icon} from 'antd';
export default class Header extends React.Component{
	render(){
		var navList = ["小米商城","MIUI","IoT","云服务","水滴","金融","有品","Select Region"];
		var sep = <span className='sep'>|</span>;
		return(
			<div>
				<div className="site-topbar">
					<div className="container">
						{/*左边菜单*/}
						<div className="bar">
							<ul className="leftBar">{
								navList.map((item,index)=>{
									var sep = index<navList.length-1?<span className='sep'>|</span>:""
									return(
										<li key={index} className="leftBar_item">{item}{sep}</li>
									)
								})
							}			
							</ul>
						</div>
						<div className="bar_right">
								{/*右边菜单*/}
							<div className="topbar-info">
								<a className="nofollow">登录{sep}</a>
								<a className="nofollow">注册{sep}</a>
								<a className="nofollow">消息通知{sep}</a>

							</div>
							{/*购物车*/}
							<div className="cart">
								<a className="nofollow">
									<Icon className="nofollow" type="shopping-cart" style={{fontSize:"18px"}} />
									购物车
									<span className="nofollow">(0)</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}