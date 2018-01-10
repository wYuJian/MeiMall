import React from "react";
import {InputNumber,Icon} from "antd";
//商品详情右边模块
export default class DetailRight extends React.Component{
	render(){
		return(
			<div style={{marginTop:10,marginLeft:10}}>
				<div>
					<p className="title">【新品】OPPO R11S 2000万 全面屏拍照手机 oppor11s oppor11</p>
					<p className="desc">Luck Dog生肖设计星幕新年版上市</p>
					<div className="tm-sale-prop">
						<p className="tb-metatit">价格</p>
						<div style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center"
						}}>
							<em className="tm-yen">¥</em>
							<p className="price">2999.00</p>
						</div>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">运费</p>
						<p>广东东莞至 厦门<Icon type="down" />思明区 厦港街道<Icon type="down" />快递: 0.00</p>
					</div>
					<div className="tm-ind-panel">
						<div style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center",
							marginLeft:20,
							marginRight:20
						}}>
							<p className="tb-metatit">月销量</p>
							<span style={{
								marginLeft:3,
								color:"#FF0036"
							}}>7407</span>
						</div>
						<div style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center",
							marginLeft:20,
							marginRight:20
						}}>
							<p className="tb-metatit">累计评价</p>
							<span style={{
								marginLeft:3,
								color:"#FF0036"
							}}>9801</span>
						</div>
						<div style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center",
							marginLeft:20,
							marginRight:20
						}}>
							<p className="tb-metatit">送天猫积分</p>
							<span style={{
								marginLeft:3,
								color:"#280"
							}}>299</span>
						</div>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">机身颜色</p>
						<ul style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center",
							flexWrap:"wrap"
						}}>
							<li style={{
								height:40,
								border:"1px solid #b8b7bd",
								boxSizing:"content-box",
								marginLeft:5,
								marginRight:5
							}}>
								<img src="https://img.alicdn.com/bao/uploaded/i1/901409638/TB2Y.d3ignH8KJjSspcXXb3QFXa_!!901409638.jpg_40x40q90.jpg" />
								<span style={{
									paddingLeft:9,
									paddingRight:9
								}}>星幕新年版</span>
							</li>
							<li style={{
								height:40,
								border:"1px solid #b8b7bd",
								boxSizing:"content-box",
								marginLeft:5,
								marginRight:5
							}}>
								<img src="https://img.alicdn.com/bao/uploaded/i1/901409638/TB2Y.d3ignH8KJjSspcXXb3QFXa_!!901409638.jpg_40x40q90.jpg" />
								<span style={{
									paddingLeft:9,
									paddingRight:9
								}}>香槟色</span>
							</li>
							<li style={{
								height:40,
								border:"1px solid #b8b7bd",
								boxSizing:"content-box",
								marginLeft:5,
								marginRight:5
							}}>
								<img src="https://img.alicdn.com/bao/uploaded/i1/901409638/TB2Y.d3ignH8KJjSspcXXb3QFXa_!!901409638.jpg_40x40q90.jpg" />
								<span style={{
									paddingLeft:9,
									paddingRight:9
								}}>黑色</span>
							</li>
							<li style={{
								height:40,
								border:"1px solid #b8b7bd",
								boxSizing:"content-box",
								marginLeft:5,
								marginRight:5
							}}>
								<img src="https://img.alicdn.com/bao/uploaded/i1/901409638/TB2Y.d3ignH8KJjSspcXXb3QFXa_!!901409638.jpg_40x40q90.jpg" />
								<span style={{
									paddingLeft:9,
									paddingRight:9
								}}>红色</span>
							</li>
						</ul>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">套餐类型</p>
						<ul style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center"
						}}>
							<li style={{
								height:32,
								paddingTop:5,
								paddingLeft:9,
								paddingRight:9,
								border:"1px solid #b8b7bd",
								marginLeft:5,
								marginRight:5
							}}>官方标配</li>
						</ul>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">存储容量</p>
						<ul style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center"
						}}>
							<li style={{
								height:32,
								paddingTop:5,
								paddingLeft:9,
								paddingRight:9,
								border:"1px solid #b8b7bd",
								marginLeft:5,
								marginRight:5
							}}>64GB</li>
							<li style={{
								height:32,
								paddingTop:5,
								paddingLeft:9,
								paddingRight:9,
								border:"1px solid #b8b7bd",
								marginLeft:5,
								marginRight:5
							}}>128GB</li>
						</ul>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">版本类型</p>
						<ul style={{
							display: "flex",
							flexDirection:"row",
							alignItems:"center"
						}}>
							<li style={{
								height:32,
								paddingTop:5,
								paddingLeft:9,
								paddingRight:9,
								border:"1px solid #b8b7bd",
								marginLeft:5,
								marginRight:5
							}}>中国大陆</li>
						</ul>
					</div>
					<div className="tm-sale-prop">
						<p className="tb-metatit">数量</p>
						<InputNumber min={1} defaultValue={1} />件
						<p style={{
							marginLeft:20
						}}>
							库存890件
						</p>
					</div>
					<div className="tb-action">
						<div style={{
							marginLeft:10,
							marginRight:10
						}}>
							<a style={{
								display:"inline-block",
								width:180,
								height:40,
								border:"1px solid #FF0036",
								textAlign:"center",
								lineHeight:"40px",
								color:"#FF0036"
							}}>立即购买</a>
						</div>
						<div style={{
							width:180,
							height:40,
							textAlign:"center",
							lineHeight:"40px",
							backgroundColor:"#FF0036",
							color:"white",
							marginRight:10,
							marginLeft:10,
							position: "relative"
						}}>
							<Icon type="shopping-cart" style={{
								position:"absolute",
								top:13,
								left:40
							}} />
							<a style={{
								height:40,
								width:180,
								color:"white",
								lineHeight:"40px"
							}}>加入购物车</a>
						</div>
					</div>
				</div>
			</div>
		)
	}

}