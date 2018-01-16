import React from "react";
import { TabBar, Icon } from 'antd-mobile';
import "../../../style/mobile/footer/footer.css";
export default class FooterIndex extends React.Component{
	constructor() {
	    super();
	    this.state = {
	      selectedTab: 'indexTab',
	      hidden: false,
	    };
	}

  render() {
    return (
      <div>
      		<TabBar 
	      		unselectedTintColor="#949494"
		        tintColor="#33A3F4"
		        barTintColor="white"
		        hidden={this.state.hidden}
      		>
		        <TabBar.Item
			          icon={<div style={{
			          	width: '4rem',
              			height: '4rem',
              			background:'url(http://ovdgq69os.bkt.clouddn.com/n-index.svg) center center /  4rem 4rem no-repeat'
			          }}/>}
			          selectedIcon={
			          <div style={{
			          	width: '4rem',
              			height: '4rem',
              			background:'url(http://ovdgq69os.bkt.clouddn.com/a-index.svg) center center /  4rem 4rem no-repeat'
			          }}/> }
			          title="首页"
			          key="首页"
			          selected={this.state.selectedTab === 'indexTab'}
			          onPress={() => {
			            this.setState({
			              selectedTab: 'indexTab',
			            });
			          }}
			        >
       			</TabBar.Item>
       			<TabBar.Item
       					icon={<div style={{
			          	width: '4rem',
              			height: '4rem',
              			background:'url(http://ovdgq69os.bkt.clouddn.com/n-fenlei.svg) center center / 4rem 4rem no-repeat'
			          }}/>}
			          selectedIcon={
			          <div style={{
			          	width: '4rem',
              			height: '4rem',
              			background:'url(http://ovdgq69os.bkt.clouddn.com/a-fenlei.svg) center center /  4rem 4rem no-repeat'
			          }}/> }
			          title="分类"
			          key="分类"
			          selected={this.state.selectedTab === 'fenleiTab'}
			          onPress={() => {
			            this.setState({
			              selectedTab: 'fenleiTab',
			            });
			          }}
			        >
       			</TabBar.Item>
       			<TabBar.Item
       					icon={<div style={{
				          	width: '4rem',
	              			height: '4rem',
	              			background:'url(http://ovdgq69os.bkt.clouddn.com/n-cart.svg) center center /  4rem 4rem no-repeat'
				          }}/>}
			          	selectedIcon={
				          <div style={{
				          	width: '4rem',
	              			height: '4rem',
	              			background:'url(http://ovdgq69os.bkt.clouddn.com/a-cart.svg) center center /  4rem 4rem no-repeat'
				          }}/> }
			          title="购物车"
			          key="购物车"
			          selected={this.state.selectedTab === 'cartTab'}
			          onPress={() => {
			            this.setState({
			              selectedTab: 'cartTab',
			            });
			          }}
			        >
       			</TabBar.Item>
       			<TabBar.Item
       					icon={<div style={{
				          	width: '4rem',
	              			height: '4rem',
	              			background:'url(http://ovdgq69os.bkt.clouddn.com/n-user.svg) center center /  4rem 4rem no-repeat'
			            }}/>}
			          	selectedIcon={
				          <div style={{
				          	width: '4rem',
	              			height: '4rem',
	              			background:'url(http://ovdgq69os.bkt.clouddn.com/a-user.svg) center center /  4rem 4rem no-repeat'
			          	}}/> }
			          title="我的"
			          key="我的"
			          selected={this.state.selectedTab === 'userTab'}
			          onPress={() => {
			            this.setState({
			              selectedTab: 'userTab',
			            });
			          }}
			        >
       			</TabBar.Item>
      		</TabBar>
      </div>
    )
  }

}
