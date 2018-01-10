import React from "react";

import "../../../../../style/homehero/sub.css";
import {Icon,Row,Col} from 'antd';
export default class Sub extends React.Component{
	render(){
		var iconStyle={marginBottom:"4px",
		    fontSize: "24px",
		    lineHeight: "24px",
		    color:"#cdcac8",
		    fontWeight:600}
		return(
			<div>
				<div>
					<Row className="sub-row">
						<div>
							<ul className="home-channel-list">
								<li className="exposure"><Icon style={iconStyle} type="tablet" /><p>选购手机</p></li>
								<li className="exposure"><Icon style={iconStyle} type="gift" /><p>企业团购</p></li>
								<li className="exposure"><Icon style={iconStyle} type="trademark" /><p>F码通道</p></li>
								<li className="exposure"><Icon style={iconStyle} type="file-text" /><p>米粉卡</p></li>
								<li className="exposure"><Icon style={iconStyle} type="reload" /><p>以旧换新</p></li>
								<li className="exposure"><Icon style={iconStyle} type="pay-circle" /><p>话费充值</p></li>
							</ul>
						</div>
						<div><img style={{width:316,height:170}} src="https://i1.mifile.cn/a4/xmad_15142931618712_eaIhT.jpg" /></div>
						<div><img style={{width:316,height:170}} src="https://i1.mifile.cn/a4/xmad_15142932350007_dNpbu.jpg" /></div>
						<div><img style={{width:316,height:170}} src="https://i1.mifile.cn/a4/xmad_15065269205274_ENtuP.jpg" /></div>
					</Row>
				</div>
			</div>
		)
	}

}