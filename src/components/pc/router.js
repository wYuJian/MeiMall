import React from "react";
import Index from './index.js';
// import Detail from './detail/index.js';
// import Cart from './cart/index.js';
import List from './list/index.js';
import {HashRouter, Route, hashHistory, Switch} from 'react-router-dom';

export default class Router extends React.Component{
	render(){
		return(
			<div>
				<HashRouter history={hashHistory}>
		          <Switch>
			        <Route exact path='/' component={Index} />
			        <Route path="/list/:defaultActiveKey" component={List}/>
			        {/*<Route path="/detail/:id" component={Detail}/>
			        <Route path="/cart/:id" component={Cart}/>
			        */}
			      </Switch>
		        </HashRouter>
			</div>
		)
	}

}