import React from "react";
import {Carousel} from "antd";
import "../../../../../style/homehero/banner.css";
export default class Banner extends React.Component{
	render(){
		return(
			<div>
				<Carousel effect="fade" autoplay="true">
				    <div><a><img src="https://i1.mifile.cn/a4/xmad_15151293191126_XcVZW.jpg" /></a></div>
				    <div><a><img src="https://i1.mifile.cn/a4/xmad_1513304443358_gzjfM.jpg" /></a></div>
				    <div><a><img src="https://i1.mifile.cn/a4/xmad_1515151277162_tHKyF.jpg" /></a></div>
				    <div><a><img src="https://i1.mifile.cn/a4/xmad_15151497615198_Qazlx.jpg" /></a></div>
				    <div><a><img src="https://i1.mifile.cn/a4/xmad_15039951895346_BYpul.jpg" /></a></div>
				</Carousel>
			</div>
		)
	}

}